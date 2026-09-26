---
title: "note-kubernet"
---

https://tryhackme.com/room/introtok8s
-đầu tiên hiểu kubernet là gì
	-> nó là một công cụ cho phép điều phối lưu lượng tới container 
	--> kubernet có khả năng điều phối số lượng container ở phái server-> từ đó điều phối lưu lượng--> tránh việc quá tải cho server

**-kiến trúc của kubernet**
- [ ] cluster
	- [ ] node-> 2 loại: control plane và worker node
		- [ ] pod
			- [ ] container

- [ ] control plane
	- [ ] điểu hành các worker node và pod
	- [ ] gồm 
		- [ ] kube-apiserver -> là api cho control plane
		- [ ] etcd ->ghi log lại các cấu hình của cả cụm cluster
		- [ ] kube-scheduler-> lập lịch, điều phối lưu lượng cho các node
		- [ ] kube-controller-manager ->quản lý các tiến trình controller
		- [ ] cloud-controller-manager-> giúp kết nối với các api của cloud service 
		![[Pasted image 20260925154712.png]]

![[Pasted image 20260925155315.png]]
- [ ] các node sử dụng các dịch vụ controller của control plane qua cái api Kube-apiservice
- [ ] trong mỗi worker node có các thành phần như
	- [ ] kubelet-> đảm bảo các container hoạt động đúng
		- [ ] nó sẽ đọc specfication của các pod, và đối chiếu xem liệu cái container chạy có ok hay ko
		- [ ] thực thi chỉ thị từ controller manager
    - [ ] kube-proxy sẽ đảm nhận các tác vụ định tuyến và giao tiếp mạng nội bộ trong cluster
	    - [ ] nó thiết lập các networking rules để lưu lượng có thể đi đến đúng pod
	- [ ] container runtime: vì mỗi pod có các container chạy trong nó, nên mỗi node phải cài một container runtime, hay dùng là docker

