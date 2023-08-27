import { Aggregate } from "./aggregates";
import { Context } from "./context";
import { Extension } from "./extenstion";
import { RulesEngine } from "./rulesEngine";

const context = new Context("CONTEXT INICIADO=");
var rulesEngine = new RulesEngine<Context>();
var extension = new Extension();
var aggregate = new Aggregate();

rulesEngine.executeRules(context, [extension, aggregate]);
rulesEngine.executeMobileRules(context, [extension]);
rulesEngine.executeUnitRules(context, [aggregate]);

console.log(context.toString());
