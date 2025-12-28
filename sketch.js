// 定数: キャンバス設定
const CANVAS_PIXEL_SIZE = 12; // ピクセル数
const DISPLAY_SCALE = 30; // 編集キャンバスの拡大倍率
const PREVIEW_SCALE = 10; // プレビュー表示倍率
const GRID_LINE_COLOR = '#cccccc'; // グリッド線の色
const CHECKER_LIGHT = '#ffffff'; // チェッカーボード明色
const CHECKER_DARK = '#e0e0e0'; // チェッカーボード暗色

// 定数: AAP-Splendor128パレット定義
const PALETTE = [
  { index: 0, label: '透過', color: 'transparent' },
  // Row 1: 暗色・暖色系 (1-8)
  { index: 1, label: '漆黒', color: '#050403' },
  { index: 2, label: '炭黒', color: '#0e0c0c' },
  { index: 3, label: '暗い赤茶', color: '#2d1b1e' },
  { index: 4, label: 'マルーン', color: '#612721' },
  { index: 5, label: '朱色', color: '#b9451d' },
  { index: 6, label: 'オレンジ', color: '#f1641f' },
  { index: 7, label: 'サーモン', color: '#fca570' },
  { index: 8, label: 'クリーム', color: '#ffe0b7' },
  // Row 2: 白・黄色系 (9-16)
  { index: 9, label: '白', color: '#ffffff' },
  { index: 10, label: 'レモンクリーム', color: '#fff089' },
  { index: 11, label: 'ゴールド', color: '#f8c53a' },
  { index: 12, label: 'オレンジ黄', color: '#e88a36' },
  { index: 13, label: 'キャラメル', color: '#b05b2c' },
  { index: 14, label: 'チョコレート', color: '#673931' },
  { index: 15, label: 'こげ茶', color: '#271f1b' },
  { index: 16, label: 'オリーブ茶', color: '#4c3d2e' },
  // Row 3: 茶・黄緑系 (17-24)
  { index: 17, label: '土色', color: '#855f39' },
  { index: 18, label: '黄土色', color: '#d39741' },
  { index: 19, label: 'レモン', color: '#f8f644' },
  { index: 20, label: 'ライムイエロー', color: '#d5dc1d' },
  { index: 21, label: 'オリーブ', color: '#adb834' },
  { index: 22, label: '苔色', color: '#7f8e44' },
  { index: 23, label: '暗い草色', color: '#586335' },
  { index: 24, label: '深緑暗', color: '#333c24' },
  // Row 4: 緑系 (25-32)
  { index: 25, label: '暗い緑', color: '#182c19' },
  { index: 26, label: '深緑', color: '#293f21' },
  { index: 27, label: 'フォレスト', color: '#477238' },
  { index: 28, label: 'グラス', color: '#61a53f' },
  { index: 29, label: 'ライム', color: '#8fd032' },
  { index: 30, label: '黄緑', color: '#c4f129' },
  { index: 31, label: 'ミントクリーム', color: '#d0ffea' },
  { index: 32, label: 'ミント', color: '#97edca' },
  // Row 5: シアン・緑系 (33-40)
  { index: 33, label: 'エメラルド', color: '#59cf93' },
  { index: 34, label: '緑', color: '#42a459' },
  { index: 35, label: '深緑中', color: '#3d6f43' },
  { index: 36, label: '暗い森', color: '#27412d' },
  { index: 37, label: '暗い紺', color: '#141225' },
  { index: 38, label: '深紺', color: '#1b2447' },
  { index: 39, label: 'コバルト', color: '#2b4e95' },
  { index: 40, label: 'スカイブルー', color: '#2789cd' },
  // Row 6: 青・シアン系 (41-48)
  { index: 41, label: 'シアン', color: '#42bfe8' },
  { index: 42, label: 'アクア', color: '#73efe8' },
  { index: 43, label: '白青', color: '#f1f2ff' },
  { index: 44, label: '淡い青', color: '#c9d4fd' },
  { index: 45, label: 'ラベンダーブルー', color: '#8aa1f6' },
  { index: 46, label: 'ロイヤルブルー', color: '#4572e3' },
  { index: 47, label: '暗い紫', color: '#494182' },
  { index: 48, label: '紫', color: '#7864c6' },
  // Row 7: 紫・ピンク系 (49-56)
  { index: 49, label: 'ラベンダー', color: '#9c8bdb' },
  { index: 50, label: 'ライラック', color: '#ceaaed' },
  { index: 51, label: '淡いピンク', color: '#fad6ff' },
  { index: 52, label: 'ピーチ', color: '#eeb59c' },
  { index: 53, label: 'ローズ', color: '#d480bb' },
  { index: 54, label: 'オーキッド', color: '#9052bc' },
  { index: 55, label: '暗い灰', color: '#171516' },
  { index: 56, label: 'チャコール', color: '#373334' },
  // Row 8: グレー・ベージュ系 (57-64)
  { index: 57, label: '灰茶', color: '#695959' },
  { index: 58, label: 'ベージュ', color: '#b28b78' },
  { index: 59, label: '淡い黄土', color: '#e2b27e' },
  { index: 60, label: 'クリームイエロー', color: '#f6d896' },
  { index: 61, label: 'レモンホワイト', color: '#fcfbbe' },
  { index: 62, label: 'オフホワイト', color: '#ecebe7' },
  { index: 63, label: '銀灰', color: '#cbcac1' },
  { index: 64, label: '灰色', color: '#a69e9a' },
  // Row 9: グレー系 (65-72)
  { index: 65, label: '中灰', color: '#807b7a' },
  { index: 66, label: '暗い灰色', color: '#595757' },
  { index: 67, label: '濃い灰', color: '#323232' },
  { index: 68, label: '赤茶暗', color: '#4f342f' },
  { index: 69, label: 'シエナ', color: '#8c5b3e' },
  { index: 70, label: 'タン', color: '#c68556' },
  { index: 71, label: 'サンド', color: '#d6a851' },
  { index: 72, label: 'オーカー', color: '#b47538' },
  // Row 10: 茶・オリーブ系 (73-80)
  { index: 73, label: 'サドルブラウン', color: '#724b2c' },
  { index: 74, label: 'ダークブラウン', color: '#452a1b' },
  { index: 75, label: 'カーキ', color: '#61683a' },
  { index: 76, label: 'オリーブ黄', color: '#939446' },
  { index: 77, label: 'マスタード', color: '#c6b858' },
  { index: 78, label: 'ペールイエロー', color: '#efdd91' },
  { index: 79, label: 'ミントグリーン', color: '#b5e7cb' },
  { index: 80, label: 'セージ', color: '#86c69a' },
  // Row 11: 緑・ティール系 (81-88)
  { index: 81, label: 'シーグリーン', color: '#5d9b79' },
  { index: 82, label: 'ティールグリーン', color: '#486859' },
  { index: 83, label: 'ダークティール', color: '#2c3b39' },
  { index: 84, label: 'ダークスレート', color: '#171819' },
  { index: 85, label: 'スレートグレー', color: '#2c3438' },
  { index: 86, label: 'グレーグリーン', color: '#465656' },
  { index: 87, label: 'ティール', color: '#648b8c' },
  { index: 88, label: 'アクアマリン', color: '#8ac4c3' },
  // Row 12: シアン・青灰系 (89-96)
  { index: 89, label: 'ペールアクア', color: '#aee9df' },
  { index: 90, label: 'アイスブルー', color: '#dce9ee' },
  { index: 91, label: 'ペールブルー', color: '#b8ccd8' },
  { index: 92, label: 'スチールブルー', color: '#88a3bc' },
  { index: 93, label: 'スレートブルー', color: '#5e718e' },
  { index: 94, label: 'ダークブルーグレー', color: '#485262' },
  { index: 95, label: '暗いインディゴ', color: '#282c3c' },
  { index: 96, label: 'インディゴグレー', color: '#464762' },
  // Row 13: 紫・グレー系 (97-104)
  { index: 97, label: 'ダスティパープル', color: '#696682' },
  { index: 98, label: 'モーブ', color: '#9a97b9' },
  { index: 99, label: 'ラベンダーグレー', color: '#c5c7dd' },
  { index: 100, label: 'ペールラベンダー', color: '#e6e7f0' },
  { index: 101, label: 'スノーホワイト', color: '#eeecea' },
  { index: 102, label: 'ダスティローズ', color: '#e3cddf' },
  { index: 103, label: 'ウィステリア', color: '#bfa5c9' },
  { index: 104, label: 'パープルグレー', color: '#877388' },
  // Row 14: 紫・ピンク系 (105-112)
  { index: 105, label: 'ダークプラム', color: '#564f5b' },
  { index: 106, label: 'エボニー', color: '#322f35' },
  { index: 107, label: 'ダークワイン', color: '#36282b' },
  { index: 108, label: 'マゼンタ暗', color: '#654856' },
  { index: 109, label: 'マゼンタ', color: '#966888' },
  { index: 110, label: 'ダスティピンク', color: '#c09097' },
  { index: 111, label: 'ローズベージュ', color: '#d4b8b8' },
  { index: 112, label: 'ペールローズ', color: '#eae0dd' },
  // Row 15: ピンク・ベージュ系 (113-120)
  { index: 113, label: 'アイボリー', color: '#f1ebdb' },
  { index: 114, label: 'トープ', color: '#ddd6bf' },
  { index: 115, label: 'ロージーブラウン', color: '#bda499' },
  { index: 116, label: 'モカ', color: '#886e6a' },
  { index: 117, label: 'ダークモカ', color: '#594d4d' },
  { index: 118, label: 'ダークマルーン', color: '#332726' },
  { index: 119, label: 'ワイン', color: '#53282a' },
  { index: 120, label: 'サンドベージュ', color: '#b29476' },
  // Row 16: クリーム・ピンク系 (121-128)
  { index: 121, label: 'ハニー', color: '#e1bf89' },
  { index: 122, label: 'バター', color: '#f8e398' },
  { index: 123, label: 'シェル', color: '#ffe9e3' },
  { index: 124, label: 'ベビーピンク', color: '#fdc9c9' },
  { index: 125, label: 'コーラル', color: '#f6a2a8' },
  { index: 126, label: 'ローズピンク', color: '#e27285' },
  { index: 127, label: 'チェリー', color: '#b25266' },
  { index: 128, label: 'プラム', color: '#643c4b' }
];

// 定数: パレットグループ（8色ずつ、128色+透過で17行）
const PALETTE_GROUPS = [
  { name: '', colorIndexes: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
  { name: '', colorIndexes: [9, 10, 11, 12, 13, 14, 15, 16] },
  { name: '', colorIndexes: [17, 18, 19, 20, 21, 22, 23, 24] },
  { name: '', colorIndexes: [25, 26, 27, 28, 29, 30, 31, 32] },
  { name: '', colorIndexes: [33, 34, 35, 36, 37, 38, 39, 40] },
  { name: '', colorIndexes: [41, 42, 43, 44, 45, 46, 47, 48] },
  { name: '', colorIndexes: [49, 50, 51, 52, 53, 54, 55, 56] },
  { name: '', colorIndexes: [57, 58, 59, 60, 61, 62, 63, 64] },
  { name: '', colorIndexes: [65, 66, 67, 68, 69, 70, 71, 72] },
  { name: '', colorIndexes: [73, 74, 75, 76, 77, 78, 79, 80] },
  { name: '', colorIndexes: [81, 82, 83, 84, 85, 86, 87, 88] },
  { name: '', colorIndexes: [89, 90, 91, 92, 93, 94, 95, 96] },
  { name: '', colorIndexes: [97, 98, 99, 100, 101, 102, 103, 104] },
  { name: '', colorIndexes: [105, 106, 107, 108, 109, 110, 111, 112] },
  { name: '', colorIndexes: [113, 114, 115, 116, 117, 118, 119, 120] },
  { name: '', colorIndexes: [121, 122, 123, 124, 125, 126, 127, 128] }
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
        return { error: `${y + 1}行${x + 1}列の値が0-128の整数ではありません。` };
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
      .map((value) => value.toString().padStart(3, ' '))
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
