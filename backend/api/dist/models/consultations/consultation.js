"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Consultation {
    constructor(id, title, category_id, consultor_id, answerer_id, question, answer, created_at) {
        this.id = id;
        this.title = title;
        this.category_id = category_id;
        this.consultor_id = consultor_id;
        this.answerer_id = answerer_id;
        this.question = question;
        this.answer = answer;
        this.created_at = created_at;
    }
}
exports.default = Consultation;
//# sourceMappingURL=consultation.js.map