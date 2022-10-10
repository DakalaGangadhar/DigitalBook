using CommonData.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthorApp.Services
{
    public class AuthorService: IAuthorService
    {
        digitalbooksDBContext db;
        private IConfiguration _config;
        public AuthorService(IConfiguration config, digitalbooksDBContext _db)
        {
            _config = config;
            db = _db;
        }
        public async Task<string> AuthorLogin(Authorlogin authorlogin, bool IsRegister)
        {
            string str = string.Empty;
            var tokenString = str;
            try
            {
                var userdata = AuthenticateUser(authorlogin, IsRegister);
                if (authorlogin != null)
                {
                    tokenString = GenerateToken(userdata);
                    return tokenString;
                }
                return tokenString;
            }
            catch (Exception ex)
            {
                return tokenString;
            }


        }
        public async Task<string> AuthorRegister(Authorlogin authorlogin, bool IsRegister)
        {
            string str = string.Empty;
            var tokenString = str;
            try
            {
                var userdata = AuthenticateUser(authorlogin, IsRegister);
                if (authorlogin != null)
                {
                    tokenString = GenerateToken(userdata);
                    return tokenString;
                }
                return tokenString;
            }
            catch (Exception ex)
            {
                return tokenString;
            }


        }
        private Authorlogin AuthenticateUser(Authorlogin authorlogin, bool IsRegister)
        {
            if (IsRegister)
            {
                db.Authorlogins.Add(authorlogin);
                db.SaveChanges();
                return authorlogin;
            }
            else
            {
                if (db.Authorlogins.Any(x => x.Username == authorlogin.Username && x.Password == authorlogin.Password))
                {
                    return db.Authorlogins.Where(x => x.Username == authorlogin.Username && x.Password == authorlogin.Password).FirstOrDefault();
                }
                else
                {
                    return null;
                }
            }

        }
        private string GenerateToken(Authorlogin authorlogin)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["jwt:Issuer"],
                _config["jwt:Audience"],
                null,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
