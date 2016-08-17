using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShanuASPNETCoreAngular2WEBAPI.Models
{
    public class StudentMasters
    {
        public int StdID { get; set; }
        public string StdName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }


        public StudentMasters(int ID, string Name, string email, string phone, string Addr)
        {
            StdID = ID;
       StdName = Name;
       Email = email;
        Phone = phone;
            Address = Addr;
    }

        public static List<StudentMasters> studetndDetails()
        {
            List<StudentMasters> listStudents = new List<StudentMasters>();
            listStudents.Add(new StudentMasters(1, "Shanu",  "shanu@shanumail.com",  "000000",  "korea"));
            listStudents.Add(new StudentMasters(1, "Afraz", "Afraz@gmail.com", "0000123", "korea"));
            listStudents.Add(new StudentMasters(1, "Afreen", "Afreen@gmail.com", "000643", "Seoul,Korea"));
            listStudents.Add(new StudentMasters(1, "Asha", "Asha@gmail.com", "00003455", "Madurai,India"));
            listStudents.Add(new StudentMasters(1, "Kather", "Kather@gmail.com", "000067567656", "Madurai,India"));

            return listStudents;
        }
    }
}
