
export var varNamedExportOne, varNamedExportTwo;
export let letNamedExportOne, letNamedExportTwo;

export var varNamedInitializedExportOne = "string", varNamedInitializedExportTwo = 42;
export let letNamedInitializedExportOne = "string", letNamedInitializedExportTwo = 42;
export const constNamedInitializedExportOne = "string", constNamedInitializedExportTwo = 42;

export function exportedFunction() {}
export function* exportedGeneratorFunction() {}
export async function exportedAsyncFunction() {}
export const namedArrowConstExport = () => {};

export class ExportedClass {}

const constOne = 42;
const constTwo = "42";
let letOne = 42;
var varOne = 42;

export { constOne, varOne, letOne, constTwo };
export { constOne as renamedOne, varOne as renamedTwo, letOne as renamedThree, constTwo as renamedFour };

const toDestructure = { one: "first", two: "second" };

export const { one, two: dos } = toDestructure;
