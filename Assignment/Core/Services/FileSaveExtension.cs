using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Assignment.Core.Services
{
    public static class FileSaveExtension
    {
        public static async Task SaveAsAsync( IFormFile formFile, string filePath)
        {
            await formFile.CopyToAsync(new FileStream(filePath, FileMode.Create));

        }

        public static void SaveAs( IFormFile formFile, string filePath)
        {
            //formFile.CopyTo(new FileStream(filePath, FileMode.Create));
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                formFile.CopyTo(stream);
            }
        }
    }
}
