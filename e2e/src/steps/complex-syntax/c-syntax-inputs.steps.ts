import {Then, When} from 'cucumber';
import {ComplexSyntaxPage} from '../../pages/complex-syntax.po';
import {expect} from 'chai';

const complexSyntaxPage = new ComplexSyntaxPage();

When(/^a user enters (.*) into the input$/, async (textToInsert: string) => {
  await complexSyntaxPage.getInput().sendKeys(textToInsert);
});

Then(/^a text below input is equal (.*)$/, async (textToVerify: string) => {
  expect(await complexSyntaxPage.getInputCopy().getText()).to.be.equal(textToVerify);
});
