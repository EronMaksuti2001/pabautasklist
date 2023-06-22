interface Intern {
    name: string;
    age: number;
    skills: string[];
}

interface Junior extends Interns {
    date_of_promotion: Date;
    domain: ['Web', 'Connect', 'Backend']
}

export interface Company {
    interns: Intern[];
    juniors: Junior[];
    country: string;
}