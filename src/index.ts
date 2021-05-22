#!/usr/bin/env node
import CreateTable from './CreateTable';

const options = {
    headers: {
        one: 'column one',
        two: 'column two',
    }
};

const result = CreateTable.toTable([
    {one: 'one-1', two : 'two-1'},
    {one: 'one-2', two : 'two-2'},
    {one: 'one-3', three : 'three-3'},
    {three: 'three-4', four : 'four-4'}
    ]);

console.log(result);

const resultWithoutColLabels = CreateTable.toTable([
    {one: 'one-1', two : 'two-1'},
    {one: 'one-2', two : 'two-2'},
    {one: 'one-3', three : 'three-3'},
    {three: 'three-4', four : 'four-4'}
], options);

console.log("with header labels: ");
console.log(resultWithoutColLabels)
