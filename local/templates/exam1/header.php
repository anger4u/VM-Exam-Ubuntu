<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeTemplateLangFile(__FILE__);
?>

<? if ($APPLICATION->GetCurPage(false) === '/'):?>
    <?require_once($_SERVER["DOCUMENT_ROOT"].SITE_TEMPLATE_PATH."/include/main/header.php");?>
<?else:?>
    <?require_once($_SERVER["DOCUMENT_ROOT"].SITE_TEMPLATE_PATH."/include/inner/header.php");?>
<?endif?>