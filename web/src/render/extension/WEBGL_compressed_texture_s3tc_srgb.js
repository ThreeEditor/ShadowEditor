/*
 * Copyright 2017-2020 The ShadowEditor Authors. All rights reserved.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file.
 * 
 * For more information, please visit: https://github.com/tengge1/ShadowEditor
 * You can also visit: https://gitee.com/tengge1/ShadowEditor
 */
/**
 * The WEBGL_compressed_texture_s3tc_srgb extension is part of the WebGL API and 
 * exposes four S3TC compressed texture formats for the sRGB colorspace.
 * @param {*} gl WebGL
 * @returns {*} Extension
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb
 */
function WEBGL_compressed_texture_s3tc_srgb(gl) {
    return gl.getExtension('WEBGL_compressed_texture_s3tc_srgb');
}

export default WEBGL_compressed_texture_s3tc_srgb;