type TDismissed = {
  name: string;
  departament: string;
  workPeriod: number;
  salary: number;
  isWill: boolean;
};

type TDepartament = {
  TECH: TDismissed[];
  DESIGN: TDismissed[];
  PROJECT: TDismissed[];
};

const Departament: TDepartament = {
  TECH: [
    {
      name: "John",
      departament: "TECH",
      workPeriod: 3,
      salary: 400000,
      isWill: false,
    },
    {
      name: "Emma",
      departament: "TECH",
      workPeriod: 2,
      salary: 350000,
      isWill: false,
    },
    {
      name: "James",
      departament: "TECH",
      workPeriod: 0,
      salary: 200000,
      isWill: true,
    },
    {
      name: "Emily",
      departament: "TECH",
      workPeriod: 3,
      salary: 400000,
      isWill: true,
    },
    {
      name: "Alexander",
      departament: "TECH",
      workPeriod: 2,
      salary: 350000,
      isWill: true,
    },
    {
      name: "Charlotte",
      departament: "TECH",
      workPeriod: 0,
      salary: 200000,
      isWill: false,
    },
    {
      name: "Scarlett",
      departament: "TECH",
      workPeriod: 3,
      salary: 400000,
      isWill: false,
    },
  ],
  DESIGN: [
    {
      name: "Alice",
      departament: "DESIGN",
      workPeriod: 1,
      salary: 250000,
      isWill: true,
    },
    {
      name: "David",
      departament: "DESIGN",
      workPeriod: 4,
      salary: 500000,
      isWill: true,
    },
    {
      name: "Olivia",
      departament: "DESIGN",
      workPeriod: 8,
      salary: 900000,
      isWill: false,
    },
    {
      name: "William",
      departament: "DESIGN",
      workPeriod: 1,
      salary: 250000,
      isWill: false,
    },
    {
      name: "Mia",
      departament: "DESIGN",
      workPeriod: 4,
      salary: 500000,
      isWill: false,
    },
    {
      name: "Henry",
      departament: "DESIGN",
      workPeriod: 8,
      salary: 900000,
      isWill: true,
    },
    {
      name: "Lucas",
      departament: "DESIGN",
      workPeriod: 1,
      salary: 250000,
      isWill: true,
    },
  ],
  PROJECT: [
    {
      name: "Michael",
      departament: "PROJECT",
      workPeriod: 7,
      salary: 800000,
      isWill: false,
    },

    {
      name: "Sophia",
      departament: "PROJECT",
      workPeriod: 5,
      salary: 600000,
      isWill: false,
    },

    {
      name: "Daniel",
      departament: "PROJECT",
      workPeriod: 6,
      salary: 700000,
      isWill: false,
    },

    {
      name: "Ava",
      departament: "PROJECT",
      workPeriod: 7,
      salary: 800000,
      isWill: true,
    },

    {
      name: "Benjamin",
      departament: "PROJECT",
      workPeriod: 5,
      salary: 600000,
      isWill: true,
    },

    {
      name: "Elijah",
      departament: "PROJECT",
      workPeriod: 6,
      salary: 700000,
      isWill: false,
    },
  ],
};

// 1 задачка
export const sortedDepartament: TDepartament = {
  TECH: Departament.TECH.slice().sort((a, b) => b.workPeriod - a.workPeriod),
  DESIGN: Departament.DESIGN.slice().sort(
    (a, b) => b.workPeriod - a.workPeriod
  ),
  PROJECT: Departament.PROJECT.slice().sort(
    (a, b) => b.workPeriod - a.workPeriod
  ),
};

// 2 задачка
// console.log("Самые долгоработающие в каждом отделе:");
// console.log("TECH:", sortedDepartament.TECH[0]);
// console.log("DESIGN:", sortedDepartament.DESIGN[0]);
// console.log("PROJECT:", sortedDepartament.PROJECT[0]);

// 3 ЗАДАЧКА
export function averageSalaryOfResigned(departament: TDepartament): number {
  let totalSalary = 0;
  let totalEmployees = 0;

  for (const key in departament) {
    if (departament.hasOwnProperty(key)) {
      departament[key].forEach((employee) => {
        if (employee.isWill) {
          totalSalary += employee.salary;
          totalEmployees++;
        }
      });
    }
  }
  return totalEmployees > 0 ? totalSalary / totalEmployees : 0;
}

export const averageSalary = averageSalaryOfResigned(Departament);
// console.log(
//   "Средняя зарплата среди уволенных по собственному желанию:",
//   averageSalary
// );
