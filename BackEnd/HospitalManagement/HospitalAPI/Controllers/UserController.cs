using HospitalAPI.Interfaces;
using HospitalAPI.Models;
using HospitalAPI.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospitalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IManageAdmin _admin;
        private readonly IManageDoctor _doctor;
        private readonly IManagePatient _patient;
        private readonly IManageUser _myUser;

        public UserController(IManageAdmin admin,IManageDoctor doctor,IManagePatient patient,IManageUser myUser)
        {
            _admin=admin;
            _doctor = doctor;
            _patient = patient;
            _myUser = myUser;
        }

        [HttpPost("Admin_Registration")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        //[Authorize]
        public async Task<ActionResult<UserDTO>> RegisterAdmin(Admin userDTO)
        {
            try
            {
                var user = await _admin.AdminRegistration(userDTO);
                if (user == null)
                {
                    return BadRequest("Unable to Register. Try again with a different mail.");
                }
                return Ok(user);
            }

            //catch (InvalidArgumentNullException iane)
            //{
            //    return BadRequest(new Error(2, iane.Message));
            //}
            //catch (InvalidNullReferenceException inre)
            //{
            //    return BadRequest(new Error(3, inre.Message));
            //}
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Doctor_Registration")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        //[Authorize]
        public async Task<ActionResult<UserDTO>> RegisterDoctor(DoctorRegisterDTO userDTO)
        {
            try
            {
                var user = await _doctor.DoctorRegistration(userDTO);
                if (user == null)
                {
                    return BadRequest("Unable to Register. Try again with a different mail.");
                }
                return Ok(user);
            }

            //catch (InvalidArgumentNullException iane)
            //{
            //    return BadRequest(new Error(2, iane.Message));
            //}
            //catch (InvalidNullReferenceException inre)
            //{
            //    return BadRequest(new Error(3, inre.Message));
            //}
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Patient_Registration")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        //[Authorize]
        public async Task<ActionResult<UserDTO>> RegisterPatient(PatientRegisterDTO userDTO)
        {
            try
            {
                var user = await _patient.PatientRegistration(userDTO);
                if (user == null)
                {
                    return BadRequest("Unable to Register. Try again with a different mail.");
                }
                return Ok(user);
            }

            //catch (InvalidArgumentNullException iane)
            //{
            //    return BadRequest(new Error(2, iane.Message));
            //}
            //catch (InvalidNullReferenceException inre)
            //{
            //    return BadRequest(new Error(3, inre.Message));
            //}
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }




        [HttpPost("Login")]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> Login([FromBody] UserDTO userDTO)
        {
            var user = await _myUser.Login(userDTO);
            if (user == null)
            {
                return BadRequest("invalid username or password");
            }
            return Ok(user);
        }
    }
}
