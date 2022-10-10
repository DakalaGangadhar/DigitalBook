using CommonData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reader.Services
{
    public interface IUserLoginService
    {
        Task<string> UserLogin(User user, bool Isregister);
        Task<string> UserRegistation(User user, bool Isregister);
    }
}
