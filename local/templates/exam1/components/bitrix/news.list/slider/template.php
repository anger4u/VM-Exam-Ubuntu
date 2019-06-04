<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>

<?
$fileImg = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array('width'=>49, 'height'=>49), BX_RESIZE_IMAGE_PROPORTIONAL, true); 
?>

<div class="item-wrap">
	<div class="rew-footer-carousel">
		
		<?foreach($arResult["ITEMS"] as $arItem):?>
		
		<?
			$fileImg = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array('width'=>49, 'height'=>49), BX_RESIZE_IMAGE_PROPORTIONAL, true); 
		?>

	   <div class="item">
		   <div class="side-block side-opin">
			   <div class="inner-block">
				   <div class="title">
					   <div class="photo-block">
							<?if(is_array($arItem["PREVIEW_PICTURE"])):?>
								<img src="<?=$fileImg['src']?>" alt="img">
						   <?endif?>
					   </div>
					   <div class="name-block">
							<a href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem["NAME"]?></a>
					   </div>
					   <div class="pos-block"><?=$arItem["PROPERTIES"]['POSITION']['VALUE']?>,<?=$arItem["PROPERTIES"]['COMPANY']['VALUE']?></div>
				   </div>
				   <div class="text-block">
						<?echo $arItem["PREVIEW_TEXT"];?>
					</div>
			   </div>
		   </div>
	   </div>
	   <?endforeach;?>
	   
	</div>
</div>