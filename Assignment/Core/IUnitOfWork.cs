using System.Threading.Tasks;

namespace Assignment.Core
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}