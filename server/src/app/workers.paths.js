import {fileURLToPath} from 'node:url';

const base = '../workers';

export const findWorkerPath = fileURLToPath(
    new URL(`${base}/find.worker.js`, import.meta.url));

export const createWorkerPath = fileURLToPath(
    new URL(`${base}/create.worker.js`, import.meta.url));

export const deleteWorkerPath = fileURLToPath(
    new URL(`${base}/delete.worker.js`, import.meta.url));

export const updateWorkerPath = fileURLToPath(
    new URL(`${base}/update.worker.js`, import.meta.url));
