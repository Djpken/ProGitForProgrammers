$(document).ready(function() {
    $('#login-form').submit(function(event) {
        event.preventDefault();
        var account = $('#account').val();
        var password = $('#password').val();
        $.ajax({
            url: '/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ account: account, password: password }),
            success: function(data) {
                if (data === "admin") {
                    window.location.href = "/admin.html"; //導向管理員頁面
                } else if (data === "employee") {
                    window.location.href = "/menutest.html"; //導向員工頁面
                } else {
                    $('#error').html(data); //顯示錯誤訊息
                }
            },
            error: function(responseEntity) {
                var responseBody = responseEntity.responseText;
                console.log('Response body:', responseBody);
                $('#error').text(responseBody);
            }
        });
    });
    $('#find').submit(function(event) {
        event.preventDefault();
        var account = $('#findAccount').val();
        $.ajax({
            url: '/read',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ account: account }),
            success: function(data) {
                var employeeTableBody = $('#employee-table-body');
                employeeTableBody.empty();
                data.forEach(function(employee) {
                    var row = $('<tr>');
                    $('<td>').text(employee.account).appendTo(row);
                    $('<td>').text(employee.password).appendTo(row);
                    $('<td>').text(employee.name).appendTo(row);
                    $('<td>').text(employee.birthday).appendTo(row);
                    $('<td>').text(employee.cellphone).appendTo(row);
                    $('<td>').text(employee.score).appendTo(row);
                    $('<td>').text(employee.updatetime).appendTo(row);
                    row.appendTo(employeeTableBody);
                });
                alert("表格建立成功")
            },
            error: function(responseEntity) {
                alert("查無此員工")
            }
        });
    });
    $('#set').submit(function(event) {
        event.preventDefault();
        var account = $('#setAccount').val();
        var password = $('#setPassword').val();
        var name = $('#setName').val();
        var birthday = $('#setBirthday').val();
        var cellphone = $('#setCellphone').val();
        $.ajax({
            url: '/register',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ account: account, password: password, name: name, birthday: birthday, cellphone: cellphone }),
            success: function(data) {
                alert(data);
            },
            error: function(responseEntity) {
                alert("尚未登入");
            }
        });
    });
});