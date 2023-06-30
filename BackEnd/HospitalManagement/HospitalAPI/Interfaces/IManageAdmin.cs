using HospitalAPI.Models;
using HospitalAPI.Models.DTO;

namespace HospitalAPI.Interfaces
{
    public interface IManageAdmin
    {
        public  Task<UserDTO> AdminRegistration(Admin user);
        public  Task<StatusDTO> ChangeDoctorStatus(StatusDTO userApproval);
        public Task<ICollection<Doctor>?> ViewAllUnapprovedDoctors();

    }
}
