// Copyright 2017-2020 The ShadowEditor Authors. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.
//
// For more information, please visit: https://github.com/tengge1/ShadowEditor
// You can also visit: https://gitee.com/tengge1/ShadowEditor

package department

import (
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"github.com/tengge1/shadoweditor/helper"
	"github.com/tengge1/shadoweditor/server"
)

func init() {
	server.Mux.UsingContext().Handle(http.MethodPost, "/api/Department/Delete", Delete)
}

// Delete delete a department.
func Delete(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	id := r.FormValue("ID")

	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		helper.WriteJSON(w, server.Result{
			Code: 300,
			Msg:  "ID is not allowed.",
		})
		return
	}

	db, err := server.Mongo()
	if err != nil {
		helper.WriteJSON(w, server.Result{
			Code: 300,
			Msg:  err.Error(),
		})
		return
	}

	filter := bson.M{
		"ID": objectID,
	}

	var doc = bson.M{}
	find, err := db.FindOne(server.DepartmentCollectionName, filter, &doc)
	if err != nil {
		helper.WriteJSON(w, server.Result{
			Code: 300,
			Msg:  err.Error(),
		})
		return
	}

	if !find {
		helper.WriteJSON(w, server.Result{
			Code: 300,
			Msg:  "The department is not existed.",
		})
		return
	}

	update := bson.M{
		"$set": bson.M{
			"Status": -1,
		},
	}

	db.UpdateOne(server.DepartmentCollectionName, filter, update)

	helper.WriteJSON(w, server.Result{
		Code: 200,
		Msg:  "Delete successfully!",
	})
}
