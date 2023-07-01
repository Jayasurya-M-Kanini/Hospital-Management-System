﻿using HospitalAPI.Interfaces;
using HospitalAPI.Models.DTO;
using HospitalAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospitalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IManageAdmin _admin;

        public AdminController(IManageAdmin admin)
        {
            _admin = admin;
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

        [HttpPost("Admin_Profile")]
        [ProducesResponseType(typeof(Admin), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        //[Authorize]
        public async Task<ActionResult<Admin>> AdminProfile(int key)
        {
            try
            {
                var user = await _admin.GetAdminProfile(key);
                if (user == null)
                {
                    return BadRequest("Unable to get the profile.");
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

        [HttpGet("View_All_Doctors")]
        [ProducesResponseType(typeof(ActionResult<ICollection<Doctor>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Doctor>>> ViewAllDoctors()
        {
            var user = await _admin.ViewAllDoctors();
            if (user == null)
            {
                return BadRequest("No Doctors available");
            }
            return Ok(user);
        }


        [HttpGet("View_All_UnApproved_Doctors")]
        [ProducesResponseType(typeof(ActionResult<ICollection<Doctor>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Doctor>>> ViewAllUnApprovedDoctors()
        {
            var user = await _admin.ViewAllUnapprovedDoctors();
            if (user == null)
            {
                return BadRequest("No Doctors available");
            }
            return Ok(user);
        }


        [HttpPut("Update_Doctor_Status")]
        //[Authorize(Roles = "Manager")]
        [ProducesResponseType(typeof(ActionResult<StatusDTO>), StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<StatusDTO>> UpdateUserStatus(StatusDTO userApproval)
        {
            var result = await _admin.ChangeDoctorStatus(userApproval);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to update the status");
        }

        [HttpPost("Search_By_Name")]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        //[Authorize]
        public async Task<ActionResult<ICollection<Doctor>>> SearchByName(string name)
        {
            try
            {
                var user = await _admin.SearchByName(name);
                if (user == null)
                {
                    return BadRequest("Unable to get the doctor.");
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

        [HttpPost("Search_By_Specialization")]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        //[Authorize]
        public async Task<ActionResult<ICollection<Doctor>>> SearchBySpecialization(string name)
        {
            try
            {
                var user = await _admin.SearchDoctorBySpecialization(name);
                if (user == null)
                {
                    return BadRequest("Unable to get the doctor.");
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

        [HttpDelete("Delete_Doctor")]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        //[Authorize]
        public async Task<ActionResult<Doctor>> DeleteDoctor(int key)
        {
            try
            {
                var user = await _admin.DeleteDoctorById(key);
                if (user == null)
                {
                    return BadRequest("Unable to get the doctor.");
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

        [HttpGet("Experience_Sort_Descending")]
        [ProducesResponseType(typeof(ActionResult<ICollection<Doctor>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Doctor>>> SortExperienceByDesc()
        {
            var user = await _admin.SortByDescExpDoctors();
            if (user == null)
            {
                return BadRequest("No Doctors available");
            }
            return Ok(user);
        }

        [HttpGet("Experience_Sort_Ascending")]
        [ProducesResponseType(typeof(ActionResult<ICollection<Doctor>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Doctor>>> SortExperienceByAsc()
        {
            var user = await _admin.SortByAscExpDoctors();
            if (user == null)
            {
                return BadRequest("No Doctors available");
            }
            return Ok(user);
        }

        [HttpGet("Date_Added_Sort_Descending")]
        [ProducesResponseType(typeof(ActionResult<ICollection<Doctor>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Doctor>>> SortAddedByDesc()
        {
            var user = await _admin.SortByRecenetlyAddedDescDoctors();
            if (user == null)
            {
                return BadRequest("No Doctors available");
            }
            return Ok(user);
        }

        [HttpGet("Date_Added_Sort_Ascending")]
        [ProducesResponseType(typeof(ActionResult<ICollection<Doctor>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Doctor>>> SortAddedByAsc()
        {
            var user = await _admin.SortByRecenetlyAddedAscDoctors();
            if (user == null)
            {
                return BadRequest("No Doctors available");
            }
            return Ok(user);
        }
    }
}
