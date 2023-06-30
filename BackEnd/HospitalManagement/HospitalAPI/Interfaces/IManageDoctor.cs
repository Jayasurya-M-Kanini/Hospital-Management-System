using HospitalAPI.Models.DTO;

namespace HospitalAPI.Interfaces
{
    public interface IManageDoctor
    {
        public Task<UserDTO> DoctorRegistration(DoctorRegisterDTO user);
    }
}
