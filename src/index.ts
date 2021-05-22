#!/usr/bin/env node
import CreateTable from './CreateTable';

const result = CreateTable.toTable([
    {one: 'one-1', two : 'two-1'},
    {one: 'one-2', two : 'two-2'},
    {one: 'one-3', three : 'three-3'},
    {three: 'three-4', four : 'four-4'}
]);

console.log(result);
