using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment.Core;

namespace Assignment.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext db;

        public UnitOfWork(AppDbContext db)
        {
            this.db = db;
        }

        public async Task CompleteAsync()
        {
            await db.SaveChangesAsync();
        }
    }
}
