/**
 * ICSE Class 7 Interactive Learning Application - Main Orchestrator
 * Coursera / Khan Academy Design System (White/Light Canvas)
 */

import { CURRICULUM_DATA } from './curriculumData.js';
import { TOPIC_MODULES, ELEMENTS_1_TO_20 } from '../src/data/curriculumData.js';
import { DIAGRAM_RENDERERS } from './diagramViewer.js';
import { SIMULATIONS } from './simulations.js';
import { QuizEngine } from './quizEngine.js';
import { renderCalculatorView } from './calculatorEngine.js';
import { renderExamReasoningView } from './examReasoningEngine.js';
import { renderValencyStudio } from './valencyEngine.js';

class ICSEExplainerApp {
  constructor() {
    this.currentView = 'dashboard'; // 'dashboard', 'subject', 'module', 'diagram', 'simulations', 'calculators', 'quiz', 'reasoning', 'valency'
    this.currentSubjectId = 'physics';
    this.currentChapterId = null;
    this.currentTopicModuleId = 'heat_transfer_vacuum_flask';
    this.selectedDiagramKey = 'vacuumFlask';
    this.searchQuery = '';

    // Mastery State
    this.userState = this.loadUserState();
    this.quizInstance = null;

    this.init();
  }

  loadUserState() {
    const saved = localStorage.getItem('icse_class7_user_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      xp: 450,
      streak: 3,
      completedChapters: ['phy-ch1'],
      chapterScores: { 'phy-ch1': 100 },
      lastActive: new Date().toISOString()
    };
  }

  saveUserState() {
    localStorage.setItem('icse_class7_user_state', JSON.stringify(this.userState));
  }

  init() {
    this.bindGlobalNavigation();
    this.bindSearch();
    this.render();
  }

  bindGlobalNavigation() {
    document.querySelectorAll('.global-nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = btn.getAttribute('data-view');
        const subject = btn.getAttribute('data-subject');
        if (subject) this.currentSubjectId = subject;
        this.navigateTo(view);
      });
    });
  }

  bindSearch() {
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        if (this.searchQuery.length > 1 && this.currentView !== 'search') {
          this.navigateTo('search');
        } else if (this.searchQuery.length === 0 && this.currentView === 'search') {
          this.navigateTo('dashboard');
        } else if (this.currentView === 'search') {
          this.render();
        }
      });
    }
  }

  navigateTo(view, params = {}) {
    this.currentView = view;
    if (params.subjectId) this.currentSubjectId = params.subjectId;
    if (params.chapterId) this.currentChapterId = params.chapterId;
    if (params.moduleId) this.currentTopicModuleId = params.moduleId;
    if (params.diagramKey) this.selectedDiagramKey = params.diagramKey;

    // Update active state on navigation buttons
    document.querySelectorAll('.global-nav-btn').forEach(b => {
      const bView = b.getAttribute('data-view');
      const bSubj = b.getAttribute('data-subject');
      if (bSubj && bSubj === this.currentSubjectId && (view === 'subject' || view === 'dashboard')) {
        b.classList.add('active', 'border-blue-600', 'text-blue-700', 'font-bold');
      } else if (!bSubj && bView === view) {
        b.classList.add('active', 'border-blue-600', 'text-blue-700', 'font-bold');
      } else {
        b.classList.remove('active', 'border-blue-600', 'text-blue-700', 'font-bold');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  render() {
    const mainContainer = document.getElementById('app-main-content');
    if (!mainContainer) return;

    this.updateUserStatsBanner();

    switch (this.currentView) {
      case 'dashboard':
        this.renderDashboard(mainContainer);
        break;
      case 'subject':
        this.renderSubjectView(mainContainer);
        break;
      case 'module':
        this.renderTopicModuleView(mainContainer);
        break;
      case 'diagram':
        this.renderDiagramViewer(mainContainer);
        break;
      case 'simulations':
        this.renderSimulationsView(mainContainer);
        break;
      case 'calculators':
        this.renderCalculatorsView(mainContainer);
        break;
      case 'reasoning':
        renderExamReasoningView('app-main-content');
        break;
      case 'valency':
        renderValencyStudio('app-main-content');
        break;
      case 'quiz':
        this.renderQuizAssessmentView(mainContainer);
        break;
      case 'search':
        this.renderSearchResults(mainContainer);
        break;
      default:
        this.renderDashboard(mainContainer);
    }

    if (window.lucide) window.lucide.createIcons();
  }

  updateUserStatsBanner() {
    // Mastery bars and XP systems removed per user directive
  }

  // View: Dashboard Overview
  renderDashboard(container) {
    const subjects = CURRICULUM_DATA.subjects;

    container.innerHTML = `
      <div class="space-y-8 max-w-7xl mx-auto pb-12">
        <!-- Hero Header: ICSE Class 7 -->
        <div class="academic-card p-6 md:p-8 bg-white border border-slate-200">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200">CISCE Curriculum Standard</span>
                <span class="badge-academic bg-emerald-50 text-emerald-700 border border-emerald-200">Class 7 Academic Engine</span>
              </div>
              <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                ICSE Class 7 — The Visual Standard for CISCE Middle School
              </h1>
              <p class="text-sm text-slate-600 max-w-2xl leading-relaxed">
                Purpose-built visual learning platform for Class 7 ICSE: canonical vector schematics, step-by-step algebraic formula solvers, formal examiner reasoning models, and chemical valency studios.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button onclick="window.app.navigateTo('reasoning')" class="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg shadow-sm transition flex items-center justify-center gap-2">
                <i data-lucide="help-circle" class="w-4 h-4"></i> Give Reasons &amp; Distinctions
              </button>
              <button onclick="window.app.navigateTo('valency')" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition flex items-center justify-center gap-2">
                <i data-lucide="sparkles" class="w-4 h-4"></i> Criss-Cross Valency
              </button>
            </div>
          </div>

          <!-- Class 7 ICSE 5-Subject Navigation Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 mt-8 pt-6 border-t border-slate-100">
            ${subjects.map(subj => {
              return `
                <div class="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between cursor-pointer hover:border-slate-300 hover:bg-slate-100/70 transition" onclick="window.app.navigateTo('subject', { subjectId: '${subj.id}' })">
                  <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-lg bg-${subj.color}-100 text-${subj.color}-700 flex items-center justify-center font-bold shrink-0">
                      <i data-lucide="${subj.icon}" class="w-4 h-4"></i>
                    </div>
                    <div>
                      <h4 class="text-xs font-bold text-slate-900 leading-tight">${subj.name}</h4>
                      <span class="text-[10px] text-slate-500 font-medium">${subj.chapters.length} Units</span>
                    </div>
                  </div>
                  <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400"></i>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- ICSE Toolsets Banner -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="academic-card p-5 bg-white border border-slate-200 space-y-3 cursor-pointer hover:border-blue-400 transition" onclick="window.app.navigateTo('reasoning')">
            <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold border border-amber-200">
              <i data-lucide="help-circle" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-sm font-bold text-slate-900">ICSE Examiner Reasoning Studio</h3>
              <p class="text-xs text-slate-600 mt-1">Master formal 'Give Reasons' and 2-column comparative 'Distinguish Between' questions with marking schemes.</p>
            </div>
            <span class="text-xs font-bold text-amber-700 flex items-center gap-1">Open Studio <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></span>
          </div>

          <div class="academic-card p-5 bg-white border border-slate-200 space-y-3 cursor-pointer hover:border-emerald-400 transition" onclick="window.app.navigateTo('valency')">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200">
              <i data-lucide="sparkles" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-sm font-bold text-slate-900">Chemical Criss-Cross Valency Lab</h3>
              <p class="text-xs text-slate-600 mt-1">Combine electropositive cations with electronegative acid radicals to derive balanced chemical formulas.</p>
            </div>
            <span class="text-xs font-bold text-emerald-700 flex items-center gap-1">Launch Lab <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></span>
          </div>

          <div class="academic-card p-5 bg-white border border-slate-200 space-y-3 cursor-pointer hover:border-purple-400 transition" onclick="window.app.navigateTo('calculators')">
            <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold border border-purple-200">
              <i data-lucide="calculator" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-sm font-bold text-slate-900">Step-by-Step Formula Solvers</h3>
              <p class="text-xs text-slate-600 mt-1">Full algebraic substitutions and dimensional analysis for Density, Speed, Simple Pendulum, and Temperature.</p>
            </div>
            <span class="text-xs font-bold text-purple-700 flex items-center gap-1">Solve Equations <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></span>
          </div>
        </div>

        <!-- Featured Canonical ICSE Modules Section -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-bold text-slate-900">Canonical Core Schematics</h2>
              <p class="text-xs text-slate-500">CISCE textbook diagrams with interactive hotspots, formulas, and examiner notes.</p>
            </div>
            <button onclick="window.app.navigateTo('simulations')" class="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Explore All <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${TOPIC_MODULES.map(mod => `
              <div class="academic-card p-5 bg-white flex flex-col justify-between space-y-4 hover:shadow-md transition">
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="badge-academic bg-slate-100 text-slate-700 border border-slate-200">${mod.subject}</span>
                    <span class="text-[11px] text-slate-400 font-mono">${mod.chapter}</span>
                  </div>
                  <h3 class="text-sm font-bold text-slate-900 hover:text-blue-600 transition leading-snug">
                    ${mod.title}
                  </h3>
                  <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    ${mod.summary}
                  </p>
                </div>

                <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span class="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <i data-lucide="crosshair" class="w-3.5 h-3.5 text-blue-600"></i> ${mod.interactiveHotspots.length} Hotspots
                  </span>
                  <button onclick="window.app.navigateTo('module', { moduleId: '${mod.id}' })" class="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded transition">
                    Inspect Diagram
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Interactive Laboratories Preview -->
        <div class="academic-card p-6 bg-white border border-slate-200 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <h2 class="text-base font-bold text-slate-900">Virtual Science Sandbox</h2>
              <p class="text-xs text-slate-500">Manipulate variables in real-time to observe scientific laws.</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="window.app.navigateTo('simulations')" class="px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 rounded-md border border-blue-200 hover:bg-blue-100 transition">
                Full Lab View
              </button>
            </div>
          </div>

          <div id="dashboard-lab-preview"></div>
        </div>
      </div>
    `;

    // Render an initial interactive simulation on dashboard
    SIMULATIONS.renderReflectionSim('dashboard-lab-preview');

    // Event listeners
    const labBtn = container.querySelector('#hero-start-lab-btn');
    if (labBtn) labBtn.addEventListener('click', () => this.navigateTo('simulations'));

    const quizBtn = container.querySelector('#hero-practice-quiz-btn');
    if (quizBtn) quizBtn.addEventListener('click', () => this.navigateTo('quiz'));
  }

  // View: Subject Chapters & Syllabus
  renderSubjectView(container) {
    const subject = CURRICULUM_DATA.subjects.find(s => s.id === this.currentSubjectId) || CURRICULUM_DATA.subjects[0];

    container.innerHTML = `
      <div class="space-y-6 max-w-7xl mx-auto pb-12">
        <!-- Subject Breadcrumb & Header -->
        <div class="academic-card p-6 bg-white space-y-3">
          <div class="flex items-center gap-2 text-xs text-slate-500">
            <span class="cursor-pointer hover:text-slate-800" onclick="window.app.navigateTo('dashboard')">Home</span>
            <span>/</span>
            <span class="font-bold text-slate-800">${subject.name}</span>
          </div>

          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-${subject.color}-100 text-${subject.color}-700 flex items-center justify-center font-bold text-xl">
                <i data-lucide="${subject.icon}" class="w-6 h-6"></i>
              </div>
              <div>
                <h1 class="text-2xl font-bold text-slate-900">${subject.name} - Class 7</h1>
                <p class="text-xs text-slate-500">${subject.tagline}</p>
              </div>
            </div>

            <!-- Subject selector pills -->
            <div class="flex items-center gap-2 bg-slate-100 p-1.5 rounded-lg">
              ${CURRICULUM_DATA.subjects.map(s => `
                <button onclick="window.app.navigateTo('subject', { subjectId: '${s.id}' })" class="px-3 py-1.5 text-xs font-semibold rounded-md transition ${s.id === subject.id ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'}">
                  ${s.name}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Chapters Accordion / List -->
        <div class="space-y-4">
          <h2 class="text-base font-bold text-slate-900">Chapters & Learning Units (${subject.chapters.length})</h2>
          
          <div class="space-y-4">
            ${subject.chapters.map((ch, idx) => {
              const isCompleted = this.userState.completedChapters.includes(ch.id);
              return `
                <div class="academic-card p-5 bg-white border border-slate-200 space-y-4">
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div class="space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">${ch.code}</span>
                        <span class="text-xs text-slate-500 font-medium">Unit ${idx + 1} • ~${ch.estimatedTime}</span>
                      </div>
                      <h3 class="text-base font-bold text-slate-900">${ch.title}</h3>
                    </div>

                    <div class="flex items-center gap-2">
                      ${ch.diagrams.length > 0 ? `
                        <button onclick="window.app.navigateTo('diagram', { diagramKey: '${ch.diagrams[0].diagramKey}' })" class="px-3 py-1.5 text-xs font-semibold rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1">
                          <i data-lucide="eye" class="w-3.5 h-3.5"></i> Diagram
                        </button>
                      ` : ''}
                      ${ch.formulas && ch.formulas.length > 0 ? `
                        <button onclick="window.app.navigateTo('calculators')" class="px-3 py-1.5 text-xs font-semibold rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1">
                          <i data-lucide="calculator" class="w-3.5 h-3.5"></i> Formulas
                        </button>
                      ` : ''}
                      <button onclick="window.app.navigateTo('quiz')" class="px-3 py-1.5 text-xs font-bold rounded bg-blue-600 hover:bg-blue-700 text-white transition flex items-center gap-1 shadow-sm">
                        <i data-lucide="check-square" class="w-3.5 h-3.5"></i> Practice Quiz
                      </button>
                    </div>
                  </div>

                  <p class="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    ${ch.summary}
                  </p>

                  <!-- Learning Objectives List -->
                  <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                    <span class="font-bold text-slate-700 block mb-1.5">Key Learning Objectives:</span>
                    <ul class="space-y-1 list-disc list-inside text-slate-600">
                      ${ch.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // View: Detailed Canonical Topic Module (e.g. Vacuum Flask, U-tube, Bohr, Leaf)
  renderTopicModuleView(container) {
    const mod = TOPIC_MODULES.find(m => m.id === this.currentTopicModuleId) || TOPIC_MODULES[0];

    container.innerHTML = `
      <div class="space-y-6 max-w-7xl mx-auto pb-12">
        <!-- Module Header -->
        <div class="academic-card p-6 bg-white space-y-3">
          <div class="flex items-center gap-2 text-xs text-slate-500">
            <span class="cursor-pointer hover:text-slate-800" onclick="window.app.navigateTo('dashboard')">Home</span>
            <span>/</span>
            <span class="cursor-pointer hover:text-slate-800" onclick="window.app.navigateTo('subject', { subjectId: '${mod.subject.toLowerCase()}' })">${mod.subject}</span>
            <span>/</span>
            <span class="font-bold text-slate-800">${mod.title}</span>
          </div>

          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200 mb-1.5">Class ${mod.icseClass} ${mod.subject}</span>
              <h1 class="text-xl md:text-2xl font-bold text-slate-900">${mod.title}</h1>
              <p class="text-xs text-slate-500 mt-0.5">${mod.summary}</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="window.app.navigateTo('quiz')" class="px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition">
                Take Module Quiz
              </button>
            </div>
          </div>
        </div>

        <!-- Interactive Diagram with Hotspots -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Left 7 cols: SVG Stage -->
          <div class="lg:col-span-7 academic-card p-4 bg-white flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
              <span class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <i data-lucide="layers" class="w-4 h-4 text-blue-600"></i> Interactive Vector Schematic
              </span>
              <span class="text-[11px] text-slate-400">Click highlighted points to inspect</span>
            </div>

            <div class="diagram-stage-container w-full min-h-[420px] bg-slate-50 flex items-center justify-center p-2 relative">
              <img src="${mod.diagramSvg}" alt="${mod.title}" class="w-full h-auto max-h-[500px] object-contain rounded-lg">
            </div>

            <div class="mt-3 p-2 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-500 text-center font-medium">
              Hover & click numbered anatomical labels to review mechanisms.
            </div>
          </div>

          <!-- Right 5 cols: Hotspots & Key Definitions Inspector -->
          <div class="lg:col-span-5 space-y-4">
            <!-- Hotspots Card -->
            <div class="academic-card p-5 bg-white space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <i data-lucide="crosshair" class="w-4 h-4 text-blue-600"></i> Hotspot Breakdown (${mod.interactiveHotspots.length})
              </h3>
              
              <div class="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
                ${mod.interactiveHotspots.map((hs, i) => `
                  <div class="p-3 rounded-lg border border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-blue-50/40 transition text-xs space-y-1">
                    <div class="flex items-center justify-between font-bold text-slate-900">
                      <span>${i + 1}. ${hs.label}</span>
                      ${hs.mechanism ? `<span class="badge-academic bg-white border border-slate-200 text-[10px] text-blue-700">${hs.mechanism}</span>` : ''}
                    </div>
                    <p class="text-slate-600 leading-relaxed">${hs.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Key Definitions Card -->
            <div class="academic-card p-5 bg-white space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <i data-lucide="book-open" class="w-4 h-4 text-emerald-600"></i> ICSE Key Definitions
              </h3>
              
              <div class="space-y-2 text-xs">
                ${mod.keyDefinitions.map(def => `
                  <div class="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <div class="flex justify-between items-center mb-1">
                      <strong class="text-slate-900">${def.term}</strong>
                      <span class="badge-academic bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px]">${def.icseImportance}</span>
                    </div>
                    <p class="text-slate-600 leading-relaxed">${def.definition}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Exam Tips Card -->
        <div class="academic-card p-5 bg-amber-50/60 border border-amber-200 space-y-2">
          <div class="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600"></i> Examiner Advice & Common Mistakes
          </div>
          <ul class="space-y-1.5 list-disc list-inside text-xs text-amber-900 leading-relaxed">
            ${mod.examTips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // View: Interactive SVG Diagram Viewer
  renderDiagramViewer(container) {
    const keys = Object.keys(DIAGRAM_RENDERERS);
    const renderer = DIAGRAM_RENDERERS[this.selectedDiagramKey] || DIAGRAM_RENDERERS.densityCylinder;

    container.innerHTML = `
      <div class="space-y-6 max-w-7xl mx-auto pb-12">
        <div class="academic-card p-6 bg-white space-y-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h1 class="text-xl font-bold text-slate-900">Interactive Diagram Explorer</h1>
              <p class="text-xs text-slate-500">Vector graphics with clear anatomical labelling and ICSE annotations.</p>
            </div>

            <!-- Diagram selector dropdown -->
            <select id="diagram-select-dropdown" class="px-3 py-2 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-800">
              ${keys.map(k => `
                <option value="${k}" ${k === this.selectedDiagramKey ? 'selected' : ''}>
                  ${k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </option>
              `).join('')}
            </select>
          </div>

          <!-- SVG Stage Container -->
          <div class="diagram-stage-container w-full h-[460px] bg-slate-50 flex items-center justify-center p-4">
            ${renderer()}
          </div>
        </div>
      </div>
    `;

    const select = container.querySelector('#diagram-select-dropdown');
    if (select) {
      select.addEventListener('change', (e) => {
        this.selectedDiagramKey = e.target.value;
        this.render();
      });
    }
  }

  // View: Virtual Labs & Simulations
  renderSimulationsView(container) {
    container.innerHTML = `
      <div class="space-y-6 max-w-7xl mx-auto pb-12">
        <!-- Header -->
        <div class="academic-card p-6 bg-white space-y-2">
          <div class="flex items-center gap-2">
            <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200">Interactive Experiments</span>
          </div>
          <h1 class="text-xl md:text-2xl font-bold text-slate-900">Middle School Virtual Science Laboratory</h1>
          <p class="text-xs text-slate-500 leading-relaxed">
            Real-time physical sandboxes enabling hands-on testing of reflection laws, hydrostatic manometer balances, Bohr atomic shells, and acid-base indicators.
          </p>
        </div>

        <!-- Lab Selection Tabs -->
        <div class="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
          <button id="tab-sim-refl" class="sim-tab-btn px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm transition">
            1. Light Reflection
          </button>
          <button id="tab-sim-mano" class="sim-tab-btn px-4 py-2 text-xs font-bold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
            2. U-Tube Manometer
          </button>
          <button id="tab-sim-bohr" class="sim-tab-btn px-4 py-2 text-xs font-bold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
            3. Bohr Atomic Shells (1–20)
          </button>
          <button id="tab-sim-ph" class="sim-tab-btn px-4 py-2 text-xs font-bold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
            4. Acid-Base pH Lab
          </button>
        </div>

        <!-- Simulation Active Mount Point -->
        <div id="sim-active-mount"></div>
      </div>
    `;

    // Default mount
    SIMULATIONS.renderReflectionSim('sim-active-mount');

    // Tab event handlers
    const resetTabStyles = () => {
      container.querySelectorAll('.sim-tab-btn').forEach(b => {
        b.className = 'sim-tab-btn px-4 py-2 text-xs font-bold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition';
      });
    };

    container.querySelector('#tab-sim-refl').addEventListener('click', (e) => {
      resetTabStyles();
      e.target.className = 'sim-tab-btn px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm transition';
      SIMULATIONS.renderReflectionSim('sim-active-mount');
    });

    container.querySelector('#tab-sim-mano').addEventListener('click', (e) => {
      resetTabStyles();
      e.target.className = 'sim-tab-btn px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm transition';
      SIMULATIONS.renderManometerSim('sim-active-mount');
    });

    container.querySelector('#tab-sim-bohr').addEventListener('click', (e) => {
      resetTabStyles();
      e.target.className = 'sim-tab-btn px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm transition';
      SIMULATIONS.renderBohrSim('sim-active-mount');
    });

    container.querySelector('#tab-sim-ph').addEventListener('click', (e) => {
      resetTabStyles();
      e.target.className = 'sim-tab-btn px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm transition';
      SIMULATIONS.renderPhLabSim('sim-active-mount');
    });
  }

  // View: Calculators & Formula Breakdowns
  renderCalculatorsView(container) {
    container.innerHTML = `
      <div class="space-y-6 max-w-7xl mx-auto pb-12">
        <div class="academic-card p-6 bg-white space-y-2">
          <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200">Algebraic Solver</span>
          <h1 class="text-xl md:text-2xl font-bold text-slate-900">Formula Breakdown & Step-by-Step Derivations</h1>
          <p class="text-xs text-slate-500">
            Interactive calculators covering Speed, Density, Pendulum Period, Temperature Conversions, and Mirror Image counts.
          </p>
        </div>

        <div id="calculator-mount-point"></div>
      </div>
    `;

    renderCalculatorView('calculator-mount-point');
  }

  // View: Assessment Practice Quiz Engine
  renderQuizAssessmentView(container) {
    // Gather all questions from curriculum
    const allQuestions = [];
    CURRICULUM_DATA.subjects.forEach(subj => {
      subj.chapters.forEach(ch => {
        if (ch.quizQuestions) allQuestions.push(...ch.quizQuestions);
      });
    });
    TOPIC_MODULES.forEach(mod => {
      if (mod.formativeQuestions) allQuestions.push(...mod.formativeQuestions);
    });

    // Shuffle questions slightly for fresh practice
    const selectedQuestions = allQuestions.slice(0, 8);

    container.innerHTML = `
      <div class="space-y-6 max-w-4xl mx-auto pb-12">
        <div class="academic-card p-6 bg-white space-y-2">
          <div class="flex items-center justify-between">
            <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200">Formative Mastery Assessment</span>
            <span class="text-xs font-mono text-slate-500">8 Curated Questions</span>
          </div>
          <h1 class="text-xl md:text-2xl font-bold text-slate-900">ICSE Class 7 Science Mastery Quiz</h1>
          <p class="text-xs text-slate-500">
            Earn Mastery Points and XP as you solve conceptual physics, chemistry, and biology questions with step-by-step rationales.
          </p>
        </div>

        <div id="quiz-mount-point"></div>
      </div>
    `;

    this.quizInstance = new QuizEngine(selectedQuestions, (result) => {
      // Award XP
      const earnedXP = result.score * 50;
      this.userState.xp += earnedXP;
      this.saveUserState();

      // Trigger Confetti if window.confetti is available
      if (window.confetti && result.percentage >= 70) {
        window.confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      const mount = document.getElementById('quiz-mount-point');
      if (mount) {
        mount.innerHTML = `
          <div class="academic-card p-8 bg-white text-center space-y-5">
            <div class="w-16 h-16 rounded-full ${result.percentage >= 70 ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'} mx-auto flex items-center justify-center font-bold text-2xl">
              <i data-lucide="${result.percentage >= 70 ? 'award' : 'refresh-cw'}" class="w-8 h-8"></i>
            </div>
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900">Assessment Complete!</h2>
              <p class="text-sm text-slate-600 mt-1">You scored <span class="font-bold text-slate-900 font-mono">${result.score} / ${result.total}</span> (${result.percentage}%)</p>
            </div>
            
            <div class="inline-flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 text-xs font-bold">
              <span class="text-blue-700 font-mono">+${earnedXP} XP Earned</span>
              <span class="text-amber-700 font-mono">Max Streak: ${result.maxStreak}</span>
            </div>

            <div class="flex justify-center gap-3 pt-2">
              <button onclick="window.app.navigateTo('dashboard')" class="px-5 py-2 text-xs font-bold rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 transition">
                Return to Dashboard
              </button>
              <button onclick="window.app.renderQuizAssessmentView(document.getElementById('app-main-content'))" class="px-5 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition">
                Practice Again
              </button>
            </div>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    });

    this.quizInstance.render('quiz-mount-point');
  }

  // View: Global Search Results
  renderSearchResults(container) {
    const q = this.searchQuery;
    const results = [];

    // Search in chapters
    CURRICULUM_DATA.subjects.forEach(subj => {
      subj.chapters.forEach(ch => {
        if (ch.title.toLowerCase().includes(q) || ch.summary.toLowerCase().includes(q) || ch.code.toLowerCase().includes(q)) {
          results.push({
            type: 'Chapter',
            subject: subj.name,
            title: `${ch.code}: ${ch.title}`,
            snippet: ch.summary,
            action: () => this.navigateTo('subject', { subjectId: subj.id })
          });
        }
      });
    });

    // Search in topic modules
    TOPIC_MODULES.forEach(mod => {
      if (mod.title.toLowerCase().includes(q) || mod.summary.toLowerCase().includes(q)) {
        results.push({
          type: 'Canonical Module',
          subject: mod.subject,
          title: mod.title,
          snippet: mod.summary,
          action: () => this.navigateTo('module', { moduleId: mod.id })
        });
      }
    });

    // Search in elements 1-20
    ELEMENTS_1_TO_20.forEach(el => {
      if (el.name.toLowerCase().includes(q) || el.symbol.toLowerCase().includes(q) || el.icseExamNote.toLowerCase().includes(q)) {
        results.push({
          type: 'Chemistry Element',
          subject: 'Chemistry',
          title: `${el.name} (${el.symbol}) - Z = ${el.atomicNumber}`,
          snippet: `Atomic # ${el.atomicNumber}, Mass ${el.massNumber}. ${el.icseExamNote}`,
          action: () => this.navigateTo('simulations')
        });
      }
    });

    container.innerHTML = `
      <div class="space-y-6 max-w-5xl mx-auto pb-12">
        <div class="academic-card p-6 bg-white space-y-2">
          <div class="flex items-center justify-between">
            <span class="badge-academic bg-blue-50 text-blue-700 border border-blue-200">Search Results</span>
            <span class="text-xs font-mono text-slate-500">${results.length} Matches Found</span>
          </div>
          <h1 class="text-xl font-bold text-slate-900">Query: "${this.searchQuery}"</h1>
        </div>

        <div class="space-y-3">
          ${results.length === 0 ? `
            <div class="p-8 text-center bg-white rounded-lg border border-slate-200 text-slate-500 text-xs">
              No matching curriculum topics found. Try searching for "Reflection", "Neuron", "Oxygen", "Manometer", or "Density".
            </div>
          ` : results.map((res, i) => `
            <div class="academic-card p-4 bg-white hover:border-blue-400 transition cursor-pointer flex flex-col justify-between space-y-1.5" onclick="window.app._searchResults[${i}].action()">
              <div class="flex items-center justify-between">
                <span class="badge-academic bg-slate-100 text-slate-700 border border-slate-200 text-[10px]">${res.type} • ${res.subject}</span>
                <span class="text-xs text-blue-600 font-bold flex items-center gap-1">Open <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
              </div>
              <h3 class="text-sm font-bold text-slate-900">${res.title}</h3>
              <p class="text-xs text-slate-600 line-clamp-2">${res.snippet}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this._searchResults = results;
  }
}

// Global initialization on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new ICSEExplainerApp();
});
