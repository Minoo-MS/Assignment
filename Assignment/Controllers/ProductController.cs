using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Assignment.Core;
using Assignment.Core.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductService _service;
        private readonly IHostingEnvironment _environment;

        public ProductController(
            IProductService service, 
            IHostingEnvironment hostingEnvironment)
        {
            _service = service;
            _environment = hostingEnvironment;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var t = _service.GetAll();
            return _service.GetAll();
        }


        [HttpPost("UploadFiles")]
        public async Task<IActionResult> Post(IFormFile file)
        {

            // full path to file in temp location
            var filePath = Path.GetTempFileName();
            if (file.Length > 0)
            {
                _service.UploadProducts(file);
            }

            return Ok("File Upload is Successful");
        }
    }
}