drop schema if exists menutest;
create schema Menutest;
CREATE TABLE Menutest.Employee(
	id int(6) NOT NULL AUTO_INCREMENT comment 'ID',
    account char(6) comment '帳號',
    password char(20) comment '密碼',
    name char(5) comment '姓名',
    score int(3) comment '分數',
    cellphone char(10) comment '電話' ,
    birthday date comment '生日',
    updatetime	 datetime comment '建立時間',
    PRIMARY KEY (`id`)
);
INSERT INTO Menutest.Employee (id,account, name,score, password,birthday,cellphone,updateTime)
VALUES ('1', '003958','許正坤',100, '003958','2000/5/26', '0916012006',now()),
	   ('2', '004015','林郁晴',79,'004015','1998/7/03', '0983967906',now());
select * from menutest.employee;
