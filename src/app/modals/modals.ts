export interface login {
  email: string | null;
  password: string | null;
  access_token: string;
  result: {
    password: string;
  };

  user: {
    created_at: string;
    email: string;
    email_verified_at: null;
    id: any;
    name: string;
    role_id: any;
    updated_at: string;
  };
  personalUserData: [
    {
      Address: null | String;
      about_me: String | null;
      contact_number: number | null;
      date_of_birth: null | string;
      department_id: null | number;
      designation_id: null | number;
      email: string;
      emergency_contact_number: null | number;
      employee_id: null | number;
      employee_status_id: null | string;
      gender: null | string;
      id: number;
      name: string;
      profile_picture: null | string;
      role_id: any;
    }
  ];

  allEmployees: [
    {
      Address: string | null;
      about_me: string | null;
      contact_number: number | null;
      created_at: '2022-11-08T11:51:35.000000Z';
      date_of_birth: number | null;
      department_id: number | null;
      designation_id: number | null;
      email: string;
      email_verified_at: null | any;
      emergency_contact_number: number | null;
      employee_id: number | null;
      employee_status_id: number | null;
      gender: string | null;
      id: number;
      name: string;
      profile_picture: any;
      role_id: number;
    }
  ];
  // allEmployeeDepartments:string
  allEmployeeDepartments: [
    {
      created_at: string;
      department: string;
      description: null | string;
      id: number | null;
      updated_at: string;
    }
  ];
  allEmployeeStatus: [
    {
      created_at: string;
      id: number;
      status: string;
      updated_at: string;
    }
  ];
  
  allRoles: [{
    id: number
    name: string
    created_at: null | number | string
    updated_at: null | number | string
  }]
}

export interface addMember {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

