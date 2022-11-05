const fs = require('fs');
const {expect} = require("chai");

const unoptimized = fs.readFileSync('./dist/custom-element.js', { encoding: 'utf-8' });
const optimized = fs.readFileSync('./dist-optimized/custom-element.js', { encoding: 'utf-8' });

it('should not minify css in unoptimized files', () => {
    expect(unoptimized).to.include(`div {
            padding: 20px;
        }

        h1 {
            padding: 5px;
            color: purple;
        }`);
});

it('should not minify html in unoptimized files', () => {
    expect(unoptimized).to.include(`<div>
                <header>
                    <h1>Title</h1>
                </header>
                <main>
                    <p>A paragraph about something...</p>
                </main>
            </div>`);
});

it('should minify css in optimized files', () => {
    expect(optimized).to.include(`div{padding:20px}h1{padding:5px;color:purple}`);
});

it('should minify html in optimized files', () => {
    expect(optimized).to.include(`<div><header><h1>Title</h1></header><main><p>A paragraph about something...</p></main></div>`);
});