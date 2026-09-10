
/**
 * Firefox の XrayWrapper 制約で発生する cross-origin object のプロパティ定義エラーを回避するための互換ラッパー。
 *
 * Firefox では `cloneInto` が利用可能なため、対象オブジェクトを安全な window コンテキストへ複製し、
 * Chromium 互換環境ではそのままオブジェクトを返す。
 *
 * @param {unknown} obj 複製またはそのまま返したい対象オブジェクト
 * @param {Window} [_window=window] cloneInto に渡す対象 window
 * @param {object} [options={}] cloneInto に渡す追加オプション
 * @returns {unknown} Firefox では clone された値、その他環境では元の値をそのまま返す
 */
const _cloneInto = typeof cloneInto === "function" ? (obj, _window = window, options = {}) => cloneInto(obj, _window, options) : (obj)=>obj;
export { _cloneInto };
