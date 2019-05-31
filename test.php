<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("test");
?><?$APPLICATION->IncludeComponent(
	"bitrix:breadcrumb",
	"",
	Array(
		"COMPONENT_TEMPLATE" => ".default",
		"START_FROM" => "0",
		"PATH" => "",
		"SITE_ID" => "s1"
	)
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>