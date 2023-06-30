using HospitalAPI.Interfaces;
using HospitalAPI.Models;
using HospitalAPI.Models.DTO;
using System.Security.Cryptography;
using System.Text;

namespace HospitalAPI.Services
{
    public class ManagePatientService : IManagePatient
    {
        private readonly IBaseCRUD<int, User> _userRepo;
        private readonly IBaseCRUD<int, Doctor> _doctorRepo;
        private readonly IBaseCRUD<int, Patient> _patientRepo;
        private readonly IGenerateToken _generateToken;

        public ManagePatientService(IBaseCRUD<int, User> userRepo, IBaseCRUD<int, Doctor> doctorRepo, IBaseCRUD<int, Patient> patientRepo, IGenerateToken generateToken)
        {
            _userRepo = userRepo;
            _doctorRepo = doctorRepo;
            _patientRepo = patientRepo;
            _generateToken = generateToken;
        }
        public async Task<UserDTO> PatientRegistration(PatientRegisterDTO user)
        {
            UserDTO myUser = null;
            var hmac = new HMACSHA512();
            user.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.PasswordClear ?? "1234"));
            user.User.PasswordKey = hmac.Key;
            user.User.Role = "Patient";
            var users = await _patientRepo.GetAll();
            if (users != null)
            {
                var myPatientUser = users.FirstOrDefault(u => u.EmailId == user.EmailId && u.PhoneNumber == user.PhoneNumber);
                if (myPatientUser != null)
                {
                    return null;
                }
            }
            var userResult = await _userRepo.Add(user.User);
            var patientResult = await _patientRepo.Add(user);
            if (userResult != null && patientResult != null)
            {
                myUser = new UserDTO();
                myUser.UserId = patientResult.PatientId;
                myUser.Role = userResult.Role;
                myUser.Token = _generateToken.GenerateToken(myUser);
            }
            return myUser;
        }

        public async Task<ICollection<Doctor>?> ViewAllApprovedDoctors()
        {
            var userData = await _doctorRepo.GetAll();
            if (userData != null)
            {
                var myUsers = userData.Where(u => u.Status == "Approved").ToList();
                if (myUsers.Count > 0)
                {
                    return myUsers;
                }
            }
            return null;
        }
    }
}
