/**
 * ICSE Class 7 Interactive Practice Quiz & Mastery Assessment Engine
 * Khan Academy styled formative assessment with rationale, hints, XP, streaks, and mastery badges.
 */

export class QuizEngine {
  constructor(questions, onCompleteCallback) {
    this.questions = questions || [];
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.selectedOption = null;
    this.isAnswerChecked = false;
    this.revealedHint = false;
    this.onCompleteCallback = onCompleteCallback;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  selectOption(index) {
    if (this.isAnswerChecked) return;
    this.selectedOption = index;
  }

  revealHint() {
    this.revealedHint = true;
  }

  checkAnswer() {
    if (this.selectedOption === null || this.isAnswerChecked) return null;
    this.isAnswerChecked = true;
    const q = this.getCurrentQuestion();
    const isCorrect = this.selectedOption === q.correctIndex;

    if (isCorrect) {
      this.score += 1;
      this.streak += 1;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
    } else {
      this.streak = 0;
    }

    return {
      isCorrect,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      userSelection: this.selectedOption
    };
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex += 1;
      this.selectedOption = null;
      this.isAnswerChecked = false;
      this.revealedHint = false;
      return true;
    } else {
      if (this.onCompleteCallback) {
        this.onCompleteCallback({
          score: this.score,
          total: this.questions.length,
          percentage: Math.round((this.score / this.questions.length) * 100),
          maxStreak: this.maxStreak
        });
      }
      return false;
    }
  }

  reset() {
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.selectedOption = null;
    this.isAnswerChecked = false;
    this.revealedHint = false;
  }

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const q = this.getCurrentQuestion();
    if (!q) {
      container.innerHTML = `<div class="p-6 text-center text-slate-500">No questions available for this module.</div>`;
      return;
    }

    const progressPct = Math.round(((this.currentIndex + 1) / this.questions.length) * 100);

    container.innerHTML = `
      <div class="academic-card p-6 bg-white space-y-5">
        <!-- Progress Header -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-600">
            <span class="flex items-center gap-1.5 text-blue-700">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span> Question ${this.currentIndex + 1} of ${this.questions.length}
            </span>
            <div class="flex items-center gap-3">
              <span class="flex items-center gap-1 text-amber-600">
                <i data-lucide="flame" class="w-3.5 h-3.5"></i> Streak: <strong class="font-mono">${this.streak}</strong>
              </span>
              <span class="text-slate-500">Score: <strong class="text-slate-900 font-mono">${this.score}</strong></span>
            </div>
          </div>
          <!-- Progress Bar -->
          <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div class="bg-blue-600 h-full transition-all duration-300 rounded-full" style="width: ${progressPct}%"></div>
          </div>
        </div>

        <!-- Question Prompt -->
        <div class="pt-2">
          <h3 class="text-base md:text-lg font-bold text-slate-900 leading-snug">
            ${q.question}
          </h3>
        </div>

        <!-- Options List -->
        <div class="space-y-2.5 pt-1">
          ${q.options.map((opt, i) => {
            let stateClass = 'border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800';
            let markerClass = 'border-slate-300 text-slate-600 bg-white';

            if (this.selectedOption === i) {
              stateClass = 'border-blue-600 bg-blue-50/70 text-blue-900 shadow-sm';
              markerClass = 'border-blue-600 bg-blue-600 text-white font-bold';
            }

            if (this.isAnswerChecked) {
              if (i === q.correctIndex) {
                stateClass = 'border-emerald-600 bg-emerald-50 text-emerald-900 font-medium';
                markerClass = 'border-emerald-600 bg-emerald-600 text-white font-bold';
              } else if (this.selectedOption === i) {
                stateClass = 'border-red-500 bg-red-50 text-red-900 line-through';
                markerClass = 'border-red-600 bg-red-600 text-white font-bold';
              } else {
                stateClass = 'border-slate-200 opacity-60 text-slate-600';
              }
            }

            const letter = String.fromCharCode(65 + i);

            return `
              <button 
                data-option-idx="${i}" 
                class="quiz-option-btn w-full p-3.5 rounded-lg border text-left flex items-start gap-3 transition ${stateClass}"
                ${this.isAnswerChecked ? 'disabled' : ''}>
                <span class="w-6 h-6 rounded-full border flex items-center justify-center text-xs shrink-0 mt-0.5 ${markerClass}">
                  ${letter}
                </span>
                <span class="text-sm leading-relaxed">${opt}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Hint Section -->
        ${q.hint ? `
          <div class="pt-1">
            ${this.revealedHint ? `
              <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                <i data-lucide="lightbulb" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
                <div><strong>Hint:</strong> ${q.hint}</div>
              </div>
            ` : `
              <button id="show-hint-btn" class="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1">
                <i data-lucide="help-circle" class="w-3.5 h-3.5"></i> Need a hint?
              </button>
            `}
          </div>
        ` : ''}

        <!-- Rationale Feedback on Check -->
        ${this.isAnswerChecked ? `
          <div class="p-4 rounded-lg border ${this.selectedOption === q.correctIndex ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-red-50 border-red-200 text-red-900'} space-y-1.5">
            <div class="flex items-center gap-2 font-bold text-sm">
              <i data-lucide="${this.selectedOption === q.correctIndex ? 'check-circle' : 'x-circle'}" class="w-5 h-5"></i>
              ${this.selectedOption === q.correctIndex ? 'Correct! Excellent deduction.' : 'Not quite right.'}
            </div>
            <p class="text-xs leading-relaxed opacity-95">
              ${q.explanation}
            </p>
          </div>
        ` : ''}

        <!-- Bottom Action Bar -->
        <div class="flex items-center justify-between pt-3 border-t border-slate-200">
          <span class="text-xs text-slate-500 font-medium">Class 7 ICSE Curriculum Practice</span>
          <div>
            ${!this.isAnswerChecked ? `
              <button id="check-ans-btn" class="px-5 py-2 text-xs font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition" ${this.selectedOption === null ? 'disabled' : ''}>
                Check Answer
              </button>
            ` : `
              <button id="next-q-btn" class="px-5 py-2 text-xs font-bold rounded-lg bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition flex items-center gap-1.5">
                ${this.currentIndex < this.questions.length - 1 ? 'Next Question' : 'Complete Assessment'}
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </button>
            `}
          </div>
        </div>
      </div>
    `;

    // Refresh lucide icons if available
    if (window.lucide) window.lucide.createIcons();

    // Event handlers
    container.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-option-idx'), 10);
        this.selectOption(idx);
        this.render(containerId);
      });
    });

    const hintBtn = container.querySelector('#show-hint-btn');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => {
        this.revealHint();
        this.render(containerId);
      });
    }

    const checkBtn = container.querySelector('#check-ans-btn');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        this.checkAnswer();
        this.render(containerId);
      });
    }

    const nextBtn = container.querySelector('#next-q-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const hasNext = this.nextQuestion();
        if (hasNext) {
          this.render(containerId);
        }
      });
    }
  }
}
