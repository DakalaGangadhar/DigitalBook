using CommonData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthorApp.Services
{
    public interface IAuthorService
    {
        Task<string> AuthorLogin(Authorlogin authorlogin, bool IsRegister);
        Task<string> AuthorRegister(Authorlogin authorlogin, bool IsRegister);
    }
}
