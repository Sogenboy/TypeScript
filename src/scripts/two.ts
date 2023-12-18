type THireds = {
  name: string;
  departament: string;
  experience: number;
  isClosedProjects: boolean;
  salary: number;
};

type TDepartament = {
  TECH: THireds[];
  DESIGN: THireds[];
  PROJECT: THireds[];
};

const Departament: TDepartament = {
  TECH: [
    {
      name: "John",
      departament: "TECH",
      experience: 3,
      isClosedProjects: true,
      salary: 400000,
    },
    {
      name: "Emma",
      departament: "TECH",
      experience: 2,
      isClosedProjects: true,
      salary: 350000,
    },
    {
      name: "James",
      departament: "TECH",
      experience: 0,
      isClosedProjects: false,
      salary: 200000,
    },
    {
      name: "Alexander",
      departament: "TECH",
      experience: 2,
      isClosedProjects: true,
      salary: 350000,
    },
    {
      name: "Emily",
      departament: "TECH",
      experience: 3,
      isClosedProjects: true,
      salary: 400000,
    },
    {
      name: "Scarlett",
      departament: "TECH",
      experience: 3,
      isClosedProjects: true,
      salary: 400000,
    },
  ],
  DESIGN: [
    {
      name: "Alice",
      departament: "DESIGN",
      experience: 1,
      isClosedProjects: false,
      salary: 250000,
    },
    {
      name: "David",
      departament: "DESIGN",
      experience: 4,
      isClosedProjects: false,
      salary: 500000,
    },
    {
      name: "Olivia",
      departament: "DESIGN",
      experience: 8,
      isClosedProjects: true,
      salary: 900000,
    },
    {
      name: "Mia",
      departament: "DESIGN",
      experience: 4,
      isClosedProjects: false,
      salary: 500000,
    },
  ],
  PROJECT: [
    {
      name: "Michael",
      departament: "PROJECT",
      experience: 7,
      isClosedProjects: true,
      salary: 800000,
    },
    {
      name: "Sophia",
      departament: "PROJECT",
      experience: 5,
      isClosedProjects: true,
      salary: 600000,
    },
    {
      name: "Daniel",
      departament: "PROJECT",
      experience: 6,
      isClosedProjects: false,
      salary: 700000,
    },
    {
      name: "Ava",
      departament: "PROJECT",
      experience: 7,
      isClosedProjects: true,
      salary: 800000,
    },
    {
      name: "Benjamin",
      departament: "PROJECT",
      experience: 5,
      isClosedProjects: true,
      salary: 600000,
    },
  ],
};

enum ETitleDepartament {
  TECH = "Технический",
  DESING = "Дизайнеры",
  PROJECT = "Проектировщики",
}

type TDifferenceDepartament = {
  title: ETitleDepartament;
  departament: THireds;
};
const getTitleDepartament = (departament: string) => {
  switch (departament) {
    case "TECH":
      return ETitleDepartament.TECH;
    case "DESING":
      return ETitleDepartament.DESING;
    default:
      return ETitleDepartament.PROJECT;
  }
};

// отдел с наибольшим кол-во сотрудников
export let maxEmployeeCountDepartament: {
  title: ETitleDepartament;
  count: number;
} | null = null;

Object.entries(Departament).forEach(([DepartamentKey, DepartamentValues]) => {
  const employeeCount = DepartamentValues.length;

  if (
    !maxEmployeeCountDepartament ||
    employeeCount > maxEmployeeCountDepartament.count
  ) {
    maxEmployeeCountDepartament = {
      title: getTitleDepartament(DepartamentKey),
      count: employeeCount,
    };
  }
});

if (maxEmployeeCountDepartament) {
  console.log(
    `Отдел с наибольшим количеством сотрудников: ${maxEmployeeCountDepartament.title}`
  );
} else {
  console.log("Нет данных о сотрудниках.");
}
// вывести отдел, в котором больше всего сотрудников с опытом от 3 лет
export let maxExperiencedEmployeeCountDepartament: {
  title: ETitleDepartament;
  count: number;
} | null = null;

Object.entries(Departament).forEach(([DepartamentKey, DepartamentValues]) => {
  const experiencedEmployees = DepartamentValues.filter(
    (employee) => employee.experience >= 3
  );
  const employeeCount = experiencedEmployees.length;

  if (
    !maxExperiencedEmployeeCountDepartament ||
    employeeCount > maxExperiencedEmployeeCountDepartament.count
  ) {
    maxExperiencedEmployeeCountDepartament = {
      title: getTitleDepartament(DepartamentKey),
      count: employeeCount,
    };
  }
});

if (maxExperiencedEmployeeCountDepartament) {
  console.log(
    `Отдел с наибольшим количеством сотрудников с опытом от 3 лет: ${maxExperiencedEmployeeCountDepartament.title}`
  );
} else {
  console.log("Нет данных о сотрудниках с опытом от 3 лет.");
}

// вывести информацию с именем и стажем сотрудников, которые уже закрыли проекты.
export let closedProjectEmployees: { name: string; experience: number }[] = [];

Object.values(Departament).forEach((employees) => {
  employees.forEach((employee) => {
    if (employee.isClosedProjects) {
      closedProjectEmployees.push({
        name: employee.name,
        experience: employee.experience,
      });
    }
  });
});

if (closedProjectEmployees.length > 0) {
  console.log("Информация о сотрудниках с закрытыми проектами:");
  closedProjectEmployees.forEach((employee) => {
    console.log(`Имя: ${employee.name}, Стаж: ${employee.experience} лет`);
  });
} else {
  console.log("Нет данных о сотрудниках с закрытыми проектами.");
}

//вывести отдел с самой большой средней зарплатой у сотрудников

export let maxAvgSalaryDepartament: {
  title: ETitleDepartament;
  avgSalary: number;
} | null = null;

Object.entries(Departament).forEach(([DepartamentKey, DepartamentValues]) => {
  const totalSalary = DepartamentValues.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  const avgSalary = totalSalary / DepartamentValues.length;

  if (
    !maxAvgSalaryDepartament ||
    avgSalary > maxAvgSalaryDepartament.avgSalary
  ) {
    maxAvgSalaryDepartament = {
      title: getTitleDepartament(DepartamentKey),
      avgSalary,
    };
  }
});

if (maxAvgSalaryDepartament) {
  console.log(
    `Отдел с самой большой средней зарплатой: ${maxAvgSalaryDepartament.title}`
  );
  console.log(`Средняя зарплата: ${maxAvgSalaryDepartament.avgSalary}`);
} else {
  console.log("Нет данных о зарплате сотрудников.");
}
