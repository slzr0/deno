import { writeFileStrSync } from "https://deno.land/std/fs/mod.ts";
import getClasses from './logic/getClasses.ts';

const classes = await getClasses();

const content = classes.map((cl) => console.log(1)).join("\n");
//console.log('a'+content);

// `${cl.id} - ${cl.name}`
//writeFileStrSync("./classes.txt", classes.join("\n"));