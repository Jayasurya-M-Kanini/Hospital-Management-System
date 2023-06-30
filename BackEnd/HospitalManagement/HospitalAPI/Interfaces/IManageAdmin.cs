using HospitalAPI.Models;
using HospitalAPI.Models.DTO;

namespace HospitalAPI.Interfaces
{
    public interface IManageAdmin
    {
        public  Task<UserDTO> AdminRegistration(Admin user);
        public  Task<Doctor> ChangeDoctorStatus();
        public Task<Doctor> ViewAllUnapprovedDoctors();

    }
}
