using CommonData.Models.ModelData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reader.Services
{
    public interface IUserDataService
    {
        Task<dynamic> GetAuthorByReaderSearch(SearchDataModel searchDataModel);
    }
}
