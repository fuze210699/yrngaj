/**
 * Lesson Model Structure
 * This file defines the structure for Japanese lessons
 */

export class LessonSection {
  constructor(title, content = [], examples = []) {
    this.title = title;
    this.content = content;
    this.examples = examples;
  }
}

export class Example {
  constructor(japanese, romaji, english) {
    this.japanese = japanese;
    this.romaji = romaji;
    this.english = english;
  }
}

export class VocabularyItem {
  constructor(japanese, romaji, english, partOfSpeech = "", notes = "") {
    this.japanese = japanese;
    this.romaji = romaji;
    this.english = english;
    this.partOfSpeech = partOfSpeech;
    this.notes = notes;
  }
}

export class GrammarPoint {
  constructor(pattern, explanation, examples = []) {
    this.pattern = pattern;
    this.explanation = explanation;
    this.examples = examples;
  }
}

export class Dialogue {
  constructor(title, exchanges = [], notes = "") {
    this.title = title;
    this.exchanges = exchanges;
    this.notes = notes;
  }
}

export class DialogueExchange {
  constructor(speaker, japanese, romaji, english) {
    this.speaker = speaker;
    this.japanese = japanese;
    this.romaji = romaji;
    this.english = english;
  }
}

export class Exercise {
  constructor(type, question, options = [], answer = "", hint = "") {
    this.type = type; // multiple-choice, fill-in-blank, matching, etc.
    this.question = question;
    this.options = options;
    this.answer = answer;
    this.hint = hint;
  }
}

export class Lesson {
  constructor({
    id,
    title,
    description,
    objectives = [],
    introduction = [],
    vocabulary = [],
    grammar = [],
    dialogues = [],
    exercises = [],
    culturalNotes = [],
    additionalResources = []
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.objectives = objectives;
    this.introduction = introduction;
    this.vocabulary = vocabulary;
    this.grammar = grammar;
    this.dialogues = dialogues;
    this.exercises = exercises;
    this.culturalNotes = culturalNotes;
    this.additionalResources = additionalResources;
  }
} 