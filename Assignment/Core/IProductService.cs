using System.Collections.Generic;
using Assignment.Core.Models;
using Microsoft.AspNetCore.Http;

namespace Assignment.Core
{
    public interface IProductService
    {
        List<Product> GetAll();
        void UploadProducts(IFormFile file);
    }
}