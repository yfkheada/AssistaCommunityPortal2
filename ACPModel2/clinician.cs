//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ACPModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class clinician
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string License { get; set; }
        public Nullable<int> facilityId { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public Nullable<System.DateTime> CreationDate { get; set; }
    
        public virtual facility facility { get; set; }
    }
}
