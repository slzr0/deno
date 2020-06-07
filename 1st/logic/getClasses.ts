import { Client } from 'https://deno.land/x/mysql/mod.ts';
import Class from '../model/class.ts';

export default async (): Promise<Class[]> => {
    const client = await new Client().connect({
        hostname: 'localhost',
        username: 'root',
        password: '',
        db: 'imuvis',
    });

    const registers = await client.query('select * from wp_users');
    console.log(registers);
    const classes: Class[] = registers.map(
        (reg: any): Class => {
            return {
                id: reg.id,
                name: reg.name,
            };
        }
    );

    return classes;
}