using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment.Core;
using Assignment.Core.Models;

namespace Assignment.Persistence
{
    public class ProductsRepository : IProductsRepository
    {
        private AppDbContext db;

        public ProductsRepository(AppDbContext db)
        {
            this.db = db;
        }

        public IQueryable<Product> GetAll()
        {
            return db.Set<Product>();

        }
    }
}
