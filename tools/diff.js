"use strict"

import { parse } from 'node-html-parser';

const root = parse('http://mehl.no');

console.log(root);
