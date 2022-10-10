using CommonData.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Reader.Services
{
    public class UserLoginService: IUserLoginService
    {
        digitalbooksDBContext db;
        private IConfiguration _config;
        public UserLoginService(digitalbooksDBContext _db, IConfiguration config)
        {
            db = _db;
            _config = config;
        }
        public async Task<string> UserLogin(User user, bool Isregister)
        {
            try
            {
                var userdata = AuthenticateUser(user, Isregister);
                if (user != null)
                {
                    var tokenString = GenerateToken(userdata);
                    return tokenString;
                }
                else
                {
                    return "Invalid data";
                }
            }
            catch (Exception ex)
            {
                return "Something went wrong";
            }
           
        }
        public async Task<string> UserRegistation(User user, bool Isregister)
        {
            try
            {
                var userdata = AuthenticateUser(user, Isregister);
                if (user != null)
                {
                    var tokenString = GenerateToken(userdata);
                    return tokenString;


                }
                else
                {
                    return "Invalid data";
                }
            }
            catch (Exception ex)
            {
                return "Something went wrong";
            }
        }
        private User AuthenticateUser(User user, bool IsRegister)
        {
            if (IsRegister)
            {
                db.Users.Add(user);
                db.SaveChanges();
                return user;
            }
            else
            {
                if (db.Users.Any(x => x.Username == user.Username && x.Password == user.Password))
                {
                    return db.Users.Where(x => x.Username == user.Username && x.Password == user.Password).FirstOrDefault();
                }
                else
                {
                    return null;
                }
            }

        }
        private string GenerateToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);

            var token = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Username)
                }),
                Expires = DateTime.Now.AddMinutes(120),
                SigningCredentials = credentials
            };
            var TokenHandler = new JwtSecurityTokenHandler();
            var tokenGenerated = TokenHandler.CreateToken(token);
            return TokenHandler.WriteToken(tokenGenerated).ToString();
        }
    }
}
