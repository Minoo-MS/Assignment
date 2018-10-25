using System.Linq;
using Assignment.Core.Models;

namespace Assignment.Core
{
    public interface IProductsRepository
    {
        IQueryable<Product> GetAll();
    }
}