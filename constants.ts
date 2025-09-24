import { UniversityUnit, Department, Course, Professor, Student, AcademicHistory, User } from './types';

export const MOCK_USERS: (User & { password?: string })[] = [
  { id: 'admin-1', name: 'Mônica Admin', username: 'admin', password: 'password', role: 'Admin' },
  { id: 'prof-1', name: 'Carolina Coordenadora', username: 'carolina', password: 'password', role: 'Professor' },
  { id: '1', name: 'Lucas Silva', username: 'lucas', password: 'password', role: 'Aluno' },
];

export const MOCK_UNITS: UniversityUnit[] = [
    { id: '1', name: 'Barreiro', sigla: 'BAR', type: 'Filial', address: 'Rua A, 123' },
    { id: '2', name: 'Coréu', sigla: 'COR', type: 'Matriz', address: 'Av. Principal, 456' },
    { id: '3', name: 'Contagem', sigla: 'CON', type: 'Filial', address: 'Rua B, 789' },
];

export const MOCK_DEPARTMENTS: Department[] = [
    { id: '1', name: 'Instituto de Ciências Exatas', sigla: 'ICE' },
    { id: '2', name: 'Instituto de Comunicação e Artes', sigla: 'ICA' },
    { id: '3', name: 'Faculdade de Direito', sigla: 'FDI' },
];

export const MOCK_COURSES: Course[] = [
    { id: '1', name: 'Ciência da Computação', sigla: 'CC', coordinator: 'Dr. Alan Turing', departmentId: '1' },
    { id: '2', name: 'Engenharia de Software', sigla: 'ES', coordinator: 'Dra. Ada Lovelace', departmentId: '1' },
    { id: '3', name: 'Sistemas de Informação', sigla: 'SI', coordinator: 'Dr. Tim Berners-Lee', departmentId: '1' },
    { id: '4', name: 'Publicidade e Propaganda', sigla: 'PP', coordinator: 'Prof. David Ogilvy', departmentId: '2' },
    { id: '5', name: 'Direito', sigla: 'DIR', coordinator: 'Prof. Ruy Barbosa', departmentId: '3' },
];

export const MOCK_PROFESSORS: Professor[] = [
    { id: '1', name: 'Wesley Dias Maciel', cpf: '111.222.333-44', titulacao: 'Doutor' },
    { id: '2', name: 'Arthur Rodrigues', cpf: '222.333.444-55', titulacao: 'Mestre' },
    { id: '3', name: 'Viviane Torres', cpf: '333.444.555-66', titulacao: 'Doutor' },
];

export const MOCK_STUDENTS: Student[] = [
    { id: '1', name: 'Lucas Silva', matricula: '202301001', course: 'Ciência da Computação' },
    { id: '2', name: 'Maria Oliveira', matricula: '202301002', course: 'Direito' },
    { id: '3', name: 'João Pereira', matricula: '202301003', course: 'Engenharia de Software' },
];

export const MOCK_ACADEMIC_HISTORY: AcademicHistory[] = [
    { id: '1', studentId: '1', discipline: 'Projeto de Software', finalGrade: 95, status: 'Aprovado' },
    { id: '2', studentId: '1', discipline: 'Cálculo I', finalGrade: 55, status: 'Reprovado' },
    { id: '3', studentId: '1', discipline: 'Algoritmos', finalGrade: 88, status: 'Aprovado' },
    { id: '4', studentId: '2', discipline: 'Direito Constitucional', finalGrade: 92, status: 'Aprovado' },
    { id: '5', studentId: '3', discipline: 'Banco de Dados', finalGrade: 75, status: 'Aprovado' },
];