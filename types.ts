export interface User {
  id: string;
  name: string;
  username: string;
  role: 'Admin' | 'Professor' | 'Aluno';
}

export interface UniversityUnit {
  id: string;
  name: string;
  sigla: string;
  type: 'Matriz' | 'Filial';
  address: string;
}

export interface Department {
  id: string;
  name: string;
  sigla: string;
}

export interface Course {
    id: string;
    name: string;
    sigla: string;
    coordinator: string;
    departmentId: string;
}

export interface Professor {
    id: string;
    name: string;
    cpf: string;
    titulacao: string;
}

export interface Student {
    id: string;
    name: string;
    matricula: string;
    course: string;
}

export interface AcademicHistory {
    id: string;
    studentId: string;
    discipline: string;
    finalGrade: number;
    status: 'Aprovado' | 'Reprovado';
}