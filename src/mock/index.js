import MockMenuService from "@/mock/menu/MockMenuService";
import Mock from 'mockjs';

Mock.mock(/\/menu\/findMenuList/, 'get', MockMenuService.findMenuList());
