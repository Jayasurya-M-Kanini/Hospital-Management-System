using HospitalAPI.Models.DTO;
using HospitalAPI.Models;

namespace HospitalAPI.Interfaces
{
    public interface IManagePatient
    {
        public Task<UserDTO> PatientRegistration(PatientRegisterDTO user);
        public Task<Doctor> ViewAllApprovedDoctors();
    }
}
