/*
 * Copyright 2017-2020 The ShadowEditor Authors. All rights reserved.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file.
 * 
 * For more information, please visit: https://github.com/tengge1/ShadowEditor
 * You can also visit: https://gitee.com/tengge1/ShadowEditor
 */
import BaseSerializer from '../BaseSerializer';
import BufferGeometrySerializer from './BufferGeometrySerializer';

/**
 * TextBufferGeometrySerializer
 * @author tengge / https://github.com/tengge1
 */
function TextBufferGeometrySerializer() {
    BaseSerializer.call(this);
}

TextBufferGeometrySerializer.prototype = Object.create(BaseSerializer.prototype);
TextBufferGeometrySerializer.prototype.constructor = TextBufferGeometrySerializer;

TextBufferGeometrySerializer.prototype.toJSON = function (obj) {
    return BufferGeometrySerializer.prototype.toJSON.call(this, obj);
};

TextBufferGeometrySerializer.prototype.fromJSON = function (json, parent) {
    var obj = parent === undefined ? new THREE.TextBufferGeometry(
        json.parameters.text,
        json.parameters.parameters
    ) : parent;

    BufferGeometrySerializer.prototype.fromJSON.call(this, json, obj);

    return obj;
};

export default TextBufferGeometrySerializer;