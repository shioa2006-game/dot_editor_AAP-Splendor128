// 定数: キャンバス設定
const CANVAS_PIXEL_SIZE = 12; // ピクセル数
const DISPLAY_SCALE = 30; // 編集キャンバスの拡大倍率
const PREVIEW_SCALE = 10; // プレビュー表示倍率
const GRID_LINE_COLOR = '#cccccc'; // グリッド線の色
const CHECKER_LIGHT = '#ffffff'; // チェッカーボード明色
const CHECKER_DARK = '#e0e0e0'; // チェッカーボード暗色

// 定数: Resurrect 64パレット定義
const PALETTE = [
  { index: 0, label: '透過', color: 'transparent' },
  // グレースケール・ニュートラル (1-10)
  { index: 1, label: '暗い紫黒', color: '#2e222f' },
  { index: 2, label: '暗い紫灰', color: '#3e3546' },
  { index: 3, label: '紫灰', color: '#625565' },
  { index: 4, label: 'くすんだローズ', color: '#966c6c' },
  { index: 5, label: 'ベージュ', color: '#ab947a' },
  { index: 6, label: '暗いモーブ', color: '#694f62' },
  { index: 7, label: '灰紫', color: '#7f708a' },
  { index: 8, label: '青灰', color: '#9babb2' },
  { index: 9, label: '淡い緑灰', color: '#c7dcd0' },
  { index: 10, label: '白', color: '#ffffff' },
  // 赤・オレンジ (11-19)
  { index: 11, label: '暗い赤', color: '#6e2727' },
  { index: 12, label: '赤茶', color: '#b33831' },
  { index: 13, label: '明るい赤', color: '#ea4f36' },
  { index: 14, label: 'オレンジ赤', color: '#f57d4a' },
  { index: 15, label: 'クリムゾン', color: '#ae2334' },
  { index: 16, label: '鮮やかな赤', color: '#e83b3b' },
  { index: 17, label: 'オレンジ', color: '#fb6b1d' },
  { index: 18, label: '黄オレンジ', color: '#f79617' },
  { index: 19, label: '黄', color: '#f9c22b' },
  // 茶・暖色 (20-24)
  { index: 20, label: 'ワイン', color: '#7a3045' },
  { index: 21, label: 'レンガ', color: '#9e4539' },
  { index: 22, label: 'テラコッタ', color: '#cd683d' },
  { index: 23, label: 'サーモン', color: '#e6904e' },
  { index: 24, label: '山吹', color: '#fbb954' },
  // 緑・黄緑 (25-34)
  { index: 25, label: 'オリーブ茶', color: '#4c3e24' },
  { index: 26, label: 'オリーブ', color: '#676633' },
  { index: 27, label: '黄緑', color: '#a2a947' },
  { index: 28, label: 'ライム', color: '#d5e04b' },
  { index: 29, label: 'レモン', color: '#fbff86' },
  { index: 30, label: '深緑', color: '#165a4c' },
  { index: 31, label: '緑', color: '#239063' },
  { index: 32, label: 'エメラルド', color: '#1ebc73' },
  { index: 33, label: '明るい緑', color: '#91db69' },
  { index: 34, label: '黄緑明', color: '#cddf6c' },
  // グレー・暗色 (35-39)
  { index: 35, label: '暗いグレー', color: '#313638' },
  { index: 36, label: '暗い青緑', color: '#374e4a' },
  { index: 37, label: '緑灰', color: '#547e64' },
  { index: 38, label: 'セージ', color: '#92a984' },
  { index: 39, label: '苔色', color: '#b2ba90' },
  // シアン・ティール (40-44)
  { index: 40, label: '暗いシアン', color: '#0b5e65' },
  { index: 41, label: 'ティール', color: '#0b8a8f' },
  { index: 42, label: 'ターコイズ', color: '#0eaf9b' },
  { index: 43, label: '明るいシアン', color: '#30e1b9' },
  { index: 44, label: '水色', color: '#8ff8e2' },
  // 青 (45-49)
  { index: 45, label: '暗い紺', color: '#323353' },
  { index: 46, label: '紺', color: '#484a77' },
  { index: 47, label: '青', color: '#4d65b4' },
  { index: 48, label: '明るい青', color: '#4d9be6' },
  { index: 49, label: '水色明', color: '#8fd3ff' },
  // 紫 (50-54)
  { index: 50, label: '暗いプラム', color: '#45293f' },
  { index: 51, label: 'プラム', color: '#6b3e75' },
  { index: 52, label: '紫', color: '#905ea9' },
  { index: 53, label: 'ラベンダー', color: '#a884f3' },
  { index: 54, label: '淡いピンク', color: '#eaaded' },
  // ピンク・マゼンタ (55-64)
  { index: 55, label: '暗いマゼンタ', color: '#753c54' },
  { index: 56, label: 'マゼンタ', color: '#a24b6f' },
  { index: 57, label: 'ローズ', color: '#cf657f' },
  { index: 58, label: 'ピンク', color: '#ed8099' },
  { index: 59, label: '深いマゼンタ', color: '#831c5d' },
  { index: 60, label: '赤マゼンタ', color: '#c32454' },
  { index: 61, label: '明るいローズ', color: '#f04f78' },
  { index: 62, label: 'サーモンピンク', color: '#f68181' },
  { index: 63, label: '肌色明', color: '#fca790' },
  { index: 64, label: 'クリーム', color: '#fdcbb0' }
];

// 定数: パレットグループ（2行表示用に8色ずつ）
const PALETTE_GROUPS = [
  { name: '', colorIndexes: [0, 1, 2, 3, 4, 5, 6, 7] },
  { name: '', colorIndexes: [8, 9, 10, 11, 12, 13, 14, 15] },
  { name: '', colorIndexes: [16, 17, 18, 19, 20, 21, 22, 23] },
  { name: '', colorIndexes: [24, 25, 26, 27, 28, 29, 30, 31] },
  { name: '', colorIndexes: [32, 33, 34, 35, 36, 37, 38, 39] },
  { name: '', colorIndexes: [40, 41, 42, 43, 44, 45, 46, 47] },
  { name: '', colorIndexes: [48, 49, 50, 51, 52, 53, 54, 55] },
  { name: '', colorIndexes: [56, 57, 58, 59, 60, 61, 62, 63, 64] }
];

// 状態管理変数
let showGrid = true;
let selectedColorIndex = 1;
let selectedTool = 'pen';
let canvasLayer;
let previewCanvas;
let previewContext;
let statusMessageElement;
let exportTextarea;
let importTextarea;
let exportFeedbackElement;
let importFeedbackElement;
let exportFormat = 'pretty';
let exportFeedbackTimer = null;
let importFeedbackTimer = null;
let pixelData = [];
let isPainting = false;
let lastPaintedPixel = null;

function setup() {
  // コメント: 編集キャンバスを生成
  const canvasSize = CANVAS_PIXEL_SIZE * DISPLAY_SCALE;
  canvasLayer = createCanvas(canvasSize, canvasSize);
  canvasLayer.parent('canvas-wrapper');
  pixelDensity(1);
  noSmooth();
  noLoop();

  // コメント: プレビューキャンバスを生成
  const previewSize = CANVAS_PIXEL_SIZE * PREVIEW_SCALE;
  const previewWrapper = document.getElementById('preview-wrapper');
  previewCanvas = document.createElement('canvas');
  previewCanvas.width = previewSize;
  previewCanvas.height = previewSize;
  previewCanvas.classList.add('preview-canvas');
  previewContext = previewCanvas.getContext('2d', { alpha: true });
  if (previewContext) {
    previewContext.imageSmoothingEnabled = false;
  }
  previewWrapper.appendChild(previewCanvas);

  canvasLayer.elt.addEventListener('contextmenu', handleCanvasContextMenu);

  initializePixelData();

  statusMessageElement = document.getElementById('status-message');
  updateStatusMessage();

  const gridToggleButton = document.getElementById('grid-toggle');
  gridToggleButton.addEventListener('click', () => {
    showGrid = !showGrid;
    gridToggleButton.textContent = `グリッド表示: ${showGrid ? 'ON' : 'OFF'}`;
    redraw();
  });

  createPaletteUI();
  setupToolButtons();
  setupToolActions();
  setupDataIO();

  updateExportTextarea();
  redraw();
}

function draw() {
  drawMainCheckerboard();
  drawCanvasPixels();

  if (showGrid) {
    drawGridLines();
  }

  drawPreviewCheckerboard();
  drawPreviewPixels();
}

function drawMainCheckerboard() {
  noStroke();
  const tileSize = DISPLAY_SCALE;

  for (let y = 0; y < CANVAS_PIXEL_SIZE; y += 1) {
    for (let x = 0; x < CANVAS_PIXEL_SIZE; x += 1) {
      const useDark = (x + y) % 2 === 0;
      fill(useDark ? CHECKER_DARK : CHECKER_LIGHT);
      rect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
}

function drawPreviewCheckerboard() {
  if (!previewContext) {
    return;
  }

  previewContext.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
  const tileSize = PREVIEW_SCALE;

  for (let y = 0; y < CANVAS_PIXEL_SIZE; y += 1) {
    for (let x = 0; x < CANVAS_PIXEL_SIZE; x += 1) {
      const useDark = (x + y) % 2 === 0;
      previewContext.fillStyle = useDark ? CHECKER_DARK : CHECKER_LIGHT;
      previewContext.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
}

function drawGridLines() {
  stroke(GRID_LINE_COLOR);
  strokeWeight(1);

  const canvasSize = CANVAS_PIXEL_SIZE * DISPLAY_SCALE;
  for (let i = 0; i <= CANVAS_PIXEL_SIZE; i += 1) {
    const position = i * DISPLAY_SCALE + 0.5;
    line(position, 0, position, canvasSize);
    line(0, position, canvasSize, position);
  }
}

function drawCanvasPixels() {
  noStroke();
  const tileSize = DISPLAY_SCALE;

  for (let y = 0; y < CANVAS_PIXEL_SIZE; y += 1) {
    for (let x = 0; x < CANVAS_PIXEL_SIZE; x += 1) {
      const colorHex = getColorHex(pixelData[y][x]);
      if (!colorHex) {
        continue;
      }
      fill(colorHex);
      rect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
}

function drawPreviewPixels() {
  if (!previewContext) {
    return;
  }

  const tileSize = PREVIEW_SCALE;

  for (let y = 0; y < CANVAS_PIXEL_SIZE; y += 1) {
    for (let x = 0; x < CANVAS_PIXEL_SIZE; x += 1) {
      const colorHex = getColorHex(pixelData[y][x]);
      if (!colorHex) {
        continue;
      }
      previewContext.fillStyle = colorHex;
      previewContext.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
}

function createPaletteUI() {
  const paletteWrapper = document.getElementById('palette-wrapper');
  if (!paletteWrapper) {
    return;
  }

  paletteWrapper.innerHTML = '';

  PALETTE_GROUPS.forEach((group) => {
    const groupElement = document.createElement('div');
    groupElement.className = 'palette-group';

    // グループ名がある場合のみタイトルを表示
    if (group.name) {
      const titleElement = document.createElement('h3');
      titleElement.className = 'palette-group-title';
      titleElement.textContent = group.name;
      groupElement.appendChild(titleElement);
    }

    const swatchList = document.createElement('div');
    swatchList.className = 'palette-swatch-list';

    group.colorIndexes.forEach((index) => {
      const colorInfo = PALETTE[index];
      const swatchButton = document.createElement('button');
      swatchButton.type = 'button';
      swatchButton.className = 'palette-swatch';
      swatchButton.dataset.index = String(colorInfo.index);
      swatchButton.title = `No.${colorInfo.index} ${colorInfo.label}`;

      if (colorInfo.color === 'transparent') {
        swatchButton.classList.add('palette-swatch-transparent');
      } else {
        swatchButton.style.setProperty('--swatch-color', colorInfo.color);
      }

      if (index === selectedColorIndex) {
        swatchButton.classList.add('is-active');
      }

      swatchButton.addEventListener('click', () => {
        setSelectedColor(colorInfo.index);
      });

      swatchList.appendChild(swatchButton);
    });

    groupElement.appendChild(swatchList);
    paletteWrapper.appendChild(groupElement);
  });
}

function setupToolButtons() {
  const toolButtons = document.querySelectorAll('.tool-button');
  toolButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tool = button.dataset.tool;
      if (tool) {
        setSelectedTool(tool);
      }
    });
  });
  updateToolButtonState();
}

function setupToolActions() {
  const resetButton = document.getElementById('tool-reset');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      resetCanvas();
    });
  }
}

function setupDataIO() {
  exportTextarea = document.getElementById('export-textarea');
  importTextarea = document.getElementById('import-textarea');
  exportFeedbackElement = document.getElementById('export-feedback');
  importFeedbackElement = document.getElementById('import-feedback');

  const formatRadios = document.querySelectorAll("input[name='export-format']");
  formatRadios.forEach((radio) => {
    if (radio.checked) {
      exportFormat = radio.value === 'compact' ? 'compact' : 'pretty';
    }
    radio.addEventListener('change', () => {
      exportFormat = radio.value === 'compact' ? 'compact' : 'pretty';
      updateExportTextarea(true);
    });
  });

  const exportRefreshButton = document.getElementById('export-refresh');
  if (exportRefreshButton) {
    exportRefreshButton.addEventListener('click', () => {
      updateExportTextarea(true);
    });
  }

  const exportCopyButton = document.getElementById('export-copy');
  if (exportCopyButton) {
    exportCopyButton.addEventListener('click', handleExportCopy);
  }

  const importApplyButton = document.getElementById('import-apply');
  if (importApplyButton) {
    importApplyButton.addEventListener('click', handleImportApply);
  }

  const importClearButton = document.getElementById('import-clear');
  if (importClearButton) {
    importClearButton.addEventListener('click', handleImportClear);
  }
}

function setSelectedColor(index) {
  if (selectedColorIndex === index) {
    return;
  }
  selectedColorIndex = index;
  updatePaletteActiveState();
  updateStatusMessage();
}

function setSelectedTool(tool) {
  if (selectedTool === tool) {
    return;
  }
  selectedTool = tool;
  updateToolButtonState();
  updateStatusMessage();
}

function updatePaletteActiveState() {
  const paletteWrapper = document.getElementById('palette-wrapper');
  if (!paletteWrapper) {
    return;
  }

  const swatches = paletteWrapper.querySelectorAll('.palette-swatch');
  swatches.forEach((swatch) => {
    const swatchIndex = Number(swatch.dataset.index);
    if (swatchIndex === selectedColorIndex) {
      swatch.classList.add('is-active');
    } else {
      swatch.classList.remove('is-active');
    }
  });
}

function updateToolButtonState() {
  const toolButtons = document.querySelectorAll('.tool-button');
  toolButtons.forEach((button) => {
    const tool = button.dataset.tool;
    if (tool === selectedTool) {
      button.classList.add('is-active');
    } else {
      button.classList.remove('is-active');
    }
  });
}

function updateStatusMessage() {
  if (!statusMessageElement) {
    return;
  }

  const selectedColor = PALETTE[selectedColorIndex];
  const colorText =
    selectedColor.color === 'transparent'
      ? '透過'
      : selectedColor.color.toUpperCase();

  let message = `選択中の色: No.${selectedColor.index} (${colorText})`;
  message += ` / 現在のツール: ${getToolLabel(selectedTool)}`;

  if (lastPaintedPixel) {
    message += ` / 最終操作: (${lastPaintedPixel.x}, ${lastPaintedPixel.y})`;
  }

  statusMessageElement.textContent = message;
}

function getToolLabel(tool) {
  switch (tool) {
    case 'pen':
      return 'ペン';
    case 'eraser':
      return '消しゴム';
    case 'picker':
      return 'スポイト';
    case 'fill':
      return '塗りつぶし';
    default:
      return tool;
  }
}

function updateExportTextarea(showMessage = false) {
  if (!exportTextarea) {
    return;
  }

  const exportText =
    exportFormat === 'compact'
      ? JSON.stringify(pixelData)
      : formatPixelDataPretty(pixelData);

  exportTextarea.value = exportText;

  if (showMessage) {
    showExportFeedback('出力データを更新しました。');
  }
}

async function handleExportCopy() {
  if (!exportTextarea) {
    return;
  }

  try {
    await navigator.clipboard.writeText(exportTextarea.value);
    showExportFeedback('コピーしました。');
  } catch (error) {
    showExportFeedback('コピーに失敗しました。', true);
  }
}

function handleImportApply() {
  if (!importTextarea) {
    return;
  }

  const rawText = importTextarea.value.trim();
  if (rawText.length === 0) {
    showImportFeedback('読み込みデータが空です。', true);
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(rawText);
  } catch (error) {
    showImportFeedback('JSONの解析に失敗しました。形式を確認してください。', true);
    return;
  }

  const validation = validateImportedData(parsed);
  if (validation.error) {
    showImportFeedback(validation.error, true);
    return;
  }

  pixelData = validation.data;
  lastPaintedPixel = null;
  updateStatusMessage();
  updateExportTextarea();
  redraw();
  showImportFeedback('読み込みが完了しました。');
}

function handleImportClear() {
  if (!importTextarea) {
    return;
  }
  importTextarea.value = '';
  showImportFeedback('入力欄をクリアしました。');
}

function validateImportedData(raw) {
  if (!Array.isArray(raw)) {
    return { error: '配列形式のデータではありません。' };
  }
  if (raw.length !== CANVAS_PIXEL_SIZE) {
    return { error: `行数が${CANVAS_PIXEL_SIZE}ではありません。` };
  }

  const normalized = [];

  for (let y = 0; y < CANVAS_PIXEL_SIZE; y += 1) {
    const row = raw[y];
    if (!Array.isArray(row)) {
      return { error: `${y + 1}行目が配列ではありません。` };
    }
    if (row.length !== CANVAS_PIXEL_SIZE) {
      return { error: `${y + 1}行目の要素数が${CANVAS_PIXEL_SIZE}ではありません。` };
    }
    const normalizedRow = [];
    for (let x = 0; x < CANVAS_PIXEL_SIZE; x += 1) {
      const value = Number(row[x]);
      if (!Number.isInteger(value) || value < 0 || value >= PALETTE.length) {
        return { error: `${y + 1}行${x + 1}列の値が0-64の整数ではありません。` };
      }
      normalizedRow.push(value);
    }
    normalized.push(normalizedRow);
  }

  return { data: normalized };
}

function showExportFeedback(message, isError = false) {
  if (!exportFeedbackElement) {
    return;
  }

  if (exportFeedbackTimer) {
    clearTimeout(exportFeedbackTimer);
    exportFeedbackTimer = null;
  }

  exportFeedbackElement.textContent = message;
  exportFeedbackElement.classList.toggle('is-error', Boolean(isError));

  if (message) {
    exportFeedbackTimer = window.setTimeout(() => {
      if (exportFeedbackElement) {
        exportFeedbackElement.textContent = '';
        exportFeedbackElement.classList.remove('is-error');
      }
      exportFeedbackTimer = null;
    }, 2000);
  }
}

function showImportFeedback(message, isError = false) {
  if (!importFeedbackElement) {
    return;
  }

  if (importFeedbackTimer) {
    clearTimeout(importFeedbackTimer);
    importFeedbackTimer = null;
  }

  importFeedbackElement.textContent = message;
  importFeedbackElement.classList.toggle('is-error', Boolean(isError));

  if (message) {
    importFeedbackTimer = window.setTimeout(() => {
      if (importFeedbackElement) {
        importFeedbackElement.textContent = '';
        importFeedbackElement.classList.remove('is-error');
      }
      importFeedbackTimer = null;
    }, 2000);
  }
}

function formatPixelDataPretty(data) {
  const formattedRows = data.map((row) => {
    const values = row
      .map((value) => value.toString().padStart(2, ' '))
      .join(', ');
    return `  [ ${values} ]`;
  });
  return `[\n${formattedRows.join(',\n')}\n]`;
}

function initializePixelData() {
  pixelData = Array.from({ length: CANVAS_PIXEL_SIZE }, () =>
    Array.from({ length: CANVAS_PIXEL_SIZE }, () => 0)
  );
  lastPaintedPixel = null;
}

function getColorHex(index) {
  const colorInfo = PALETTE[index];
  if (!colorInfo || colorInfo.color === 'transparent') {
    return null;
  }
  return colorInfo.color;
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    if (isMouseWithinCanvas(mouseX, mouseY)) {
      applyPickerAt(mouseX, mouseY);
    }
    return false;
  }

  if (!isMouseWithinCanvas(mouseX, mouseY)) {
    return;
  }

  if (selectedTool === 'fill') {
    applyFillAt(mouseX, mouseY);
    return false;
  }

  if (selectedTool === 'picker') {
    applyPickerAt(mouseX, mouseY);
    return false;
  }

  isPainting = selectedTool === 'pen' || selectedTool === 'eraser';
  paintAt(mouseX, mouseY);
}

function mouseDragged() {
  if (!isPainting) {
    return;
  }
  if (isMouseWithinCanvas(mouseX, mouseY)) {
    paintAt(mouseX, mouseY);
  }
}

function mouseReleased() {
  isPainting = false;
}

function paintAt(positionX, positionY) {
  const pixelX = Math.floor(positionX / DISPLAY_SCALE);
  const pixelY = Math.floor(positionY / DISPLAY_SCALE);

  if (!isValidPixel(pixelX, pixelY)) {
    return;
  }

  const nextIndex = selectedTool === 'eraser' ? 0 : selectedColorIndex;
  if (pixelData[pixelY][pixelX] === nextIndex) {
    return;
  }

  pixelData[pixelY][pixelX] = nextIndex;
  lastPaintedPixel = { x: pixelX, y: pixelY };
  updateStatusMessage();
  updateExportTextarea();
  redraw();
}

function applyPickerAt(positionX, positionY) {
  const pixelX = Math.floor(positionX / DISPLAY_SCALE);
  const pixelY = Math.floor(positionY / DISPLAY_SCALE);

  if (!isValidPixel(pixelX, pixelY)) {
    return;
  }

  const currentIndex = pixelData[pixelY][pixelX];
  lastPaintedPixel = { x: pixelX, y: pixelY };
  setSelectedColor(currentIndex);
}

function applyFillAt(positionX, positionY) {
  const pixelX = Math.floor(positionX / DISPLAY_SCALE);
  const pixelY = Math.floor(positionY / DISPLAY_SCALE);

  if (!isValidPixel(pixelX, pixelY)) {
    return;
  }

  const targetIndex = pixelData[pixelY][pixelX];
  const replacementIndex = selectedColorIndex;

  if (targetIndex === replacementIndex) {
    return;
  }

  floodFill(pixelX, pixelY, targetIndex, replacementIndex);
  lastPaintedPixel = { x: pixelX, y: pixelY };
  updateStatusMessage();
  updateExportTextarea();
  redraw();
}

function floodFill(startX, startY, targetIndex, replacementIndex) {
  const queue = [{ x: startX, y: startY }];
  pixelData[startY][startX] = replacementIndex;

  while (queue.length > 0) {
    const { x, y } = queue.shift();
    const neighbors = [
      { x: x + 1, y },
      { x: x - 1, y },
      { x, y: y + 1 },
      { x, y: y - 1 }
    ];

    neighbors.forEach(({ x: nx, y: ny }) => {
      if (!isValidPixel(nx, ny)) {
        return;
      }
      if (pixelData[ny][nx] !== targetIndex) {
        return;
      }
      pixelData[ny][nx] = replacementIndex;
      queue.push({ x: nx, y: ny });
    });
  }
}

function resetCanvas() {
  initializePixelData();
  updateStatusMessage();
  updateExportTextarea();
  redraw();
  showExportFeedback('キャンバスをリセットしました。');
}

function isMouseWithinCanvas(positionX, positionY) {
  return positionX >= 0 && positionX < width && positionY >= 0 && positionY < height;
}

function isValidPixel(x, y) {
  return x >= 0 && x < CANVAS_PIXEL_SIZE && y >= 0 && y < CANVAS_PIXEL_SIZE;
}

function handleCanvasContextMenu(event) {
  event.preventDefault();
  const rect = event.currentTarget.getBoundingClientRect();
  const scaleX = width / rect.width;
  const scaleY = height / rect.height;
  const positionX = (event.clientX - rect.left) * scaleX;
  const positionY = (event.clientY - rect.top) * scaleY;
  applyPickerAt(positionX, positionY);
}

function keyPressed() {
  const lowerKey = typeof key === 'string' ? key.toLowerCase() : '';

  if (lowerKey === 'b') {
    setSelectedTool('pen');
    return false;
  }
  if (lowerKey === 'e') {
    setSelectedTool('eraser');
    return false;
  }
  if (lowerKey === 'i') {
    setSelectedTool('picker');
    return false;
  }
  if (lowerKey === 'f') {
    setSelectedTool('fill');
    return false;
  }
  if (
    lowerKey === 'd' &&
    (keyIsDown(CONTROL) || keyIsDown(91) || keyIsDown(224))
  ) {
    resetCanvas();
    return false;
  }
}
